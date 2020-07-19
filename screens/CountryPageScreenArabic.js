import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Switch, Button } from "react-native";

//testing 
import {fetchCountriesDailyData,fetchCountryID} from '../Api'
import { set } from "react-native-reanimated";
import { DarkTheme } from "@react-navigation/native";
//


// testing 
const ListOfCountriesNCountries =  [ 'Algeria', 'Bahrain', 'Comoros', 'Djibouti', 'Egypt', 'Iraq', 'Jordan', 'Kuwait',
                               'Lebanon', 'Libya', 'Mauritania', 'Morocco', 'Oman', 'Palestine', 'Qatar',
                               'Saudi Arabia', 'Somalia', 'Sudan', 'Syria', 'Tunisia', 'UAE', 'Yemen' ]


const ListOfCoubrtiesNamesAPI2 = ['Algeria',"Bahrain","Comoros","Djibouti", "Egypt","Iraq","Jordan",
                                  "Lebanon","Libya","Mauritania","Morocco","Oman","West Bank and Gaza","Qatar",
                                  "Saudi Arabia","Somalia","Sudan","Syria","Tunisia","United Arab Emirates","Yemen"]
// 
const renderItem = item => (

  item.country
  )


  const processDates = item => (
    item.Date
  )


  const processTotalDeaths = item => (
    parseInt(item.deaths)
  )  


  export default function CountryPageScreen({navigation}){
    const [SelectedValue, setSelectedValue] = useState(""); // Chossen country by the user to pass over to other pages
    const [SelectedValueData, setSelectedValueData] = useState(""); // Chossen country data 
    
    const [TotallCountries, setTotallCountries] = useState("") // to pass over to the next pages
    const [TotallCountriesData, setTotallCountriesData] = useState("") // data to pass over to the next pages  
    const [ListOfCountriesN, setListOfCountriesN] = useState("")
    const [ListOfCountriesNData, setListOfCountriesNData] = useState("")
    const [BottonDis,setBotton]= useState(true)
    const [DarkTheme,setDarkTheme]= useState(false)
    const [WhiteTheme,setWhiteTheme]= useState(true)
    const [BackgroundColor,setBackgroundColor]= useState('white')
    const [TextColor,setTextColor]= useState('black')
    const [CurrentTheme,setCurrentTheme]= useState('White')


    // states for graphscreen
    //const [Dates, setDates] = useState(null)
    const [TotalDeaths, setTotalDeaths] = useState(null)
    const [TotalDeathsDates, setTotalDeathsDates] = useState(null)
    const [TotalCases, setTotalCases] = useState(null)
    const [TotalCasesDates, setTotalCasesDates] = useState(null)
    const [DailyNewCases, setDailyNewCases] = useState(null)
    const [DailyNewCasesDates, setDailyNewCasesDates] = useState(null)
    const [DailyNewDeaths, setDailyNewDeaths] = useState(null)
    const [DailyNewDeathsDates, setDailyNewDeathsDates] = useState(null)



    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 70,
        alignItems: "center",
        backgroundColor: BackgroundColor
      }
    ,
      text: { 
      
        fontSize : 24,
        fontStyle : "italic",
        fontWeight: "bold",
        color: TextColor
      },
      Button: { 
        fontSize : 24,
        fontStyle : "italic",
        fontWeight: "bold",
        color: 'red',
      }
    });  

    const GetCountriesNames = async () => {
        const results = await fetchCountriesDailyData()

        

        const resultsTmp2 = [];
        for (const element of results) {
          // if (element.country in ListOfCountriesNCountries) {
            if (ListOfCountriesNCountries.includes(element.country)) {
            resultsTmp2.push(element)
          }
        }   
        //console.log(resultsTmp)
        setTotallCountriesData(results)
        //setMiddleEastCountries(resultsTmp)
        setListOfCountriesNData(resultsTmp2)
        //console.log(resultsTmp2)
      



        const Final = results.map(renderItem)
        //console.log(Final)
              
        //console.log(TotallCountries)
        //console.log("-------------------------------------")
  

        const resultsTmp = [];
        for (const element of Final) {
          // if (element.country in ListOfCountriesNCountries) {
            if (ListOfCountriesNCountries.includes(element)) {
            resultsTmp.push(element)
          }
        }   
        //console.log(resultsTmp)
        setTotallCountries(Final)
        //setMiddleEastCountries(resultsTmp)
        setListOfCountriesN(resultsTmp)
        //console.log(resultsTmp)
      }


      const test = function(itemValue) {
        setSelectedValue(itemValue)
        setBotton(false)
        GetCountry(itemValue)
      }




      const GetCountry = async (input) => {

        //console.log(input)

        //Loop over middleEastCountries to get data of chosen country
        for (const element of ListOfCountriesNData) {
          // if (element.country in middleEastCountries) {
            if (element.country === input) {
            setSelectedValueData(element)
            //console.log(element)
             }
          }
        const results = await fetchCountryID(input)
  
        //console.log(results)
        const x = results.map(processDates)
        setDates(x)
        //console.log(x)
        //console.log(Dates)
   
        
        const y = results.map(processTotalDeaths)
        setTotalDeaths(y) 
        //console.log(y)
        //console.log(TotalDeaths)    
      }

      // if (SelectedValue !== "" ){
      //   GetCountry("Egypt")
      // }


      if (TotallCountries === "") {
        GetCountriesNames()
      }

      //Check App theme
      if (DarkTheme && WhiteTheme) {
        setBackgroundColor('black')
        setTextColor('white')
        setWhiteTheme(false)
        setCurrentTheme('Black')
      }
      else if (!DarkTheme && !WhiteTheme ) {
        setBackgroundColor('white')
        setTextColor('black')
        setDarkTheme(false)
        setWhiteTheme(true)
        setCurrentTheme('White')
      }
  return (
    <View style={styles.container}>
      <View>

        <Text style ={styles.text}> 
        اختر البلد 
        </Text>
        {/* {Dates && 
        <Text>
            {Dates[0]}
        </Text>
        } */}
                         
      </View>
      <Text>
      { ListOfCountriesN && 
        <Picker
          selectedValue={SelectedValue}
          style={{ height: 50, width: 160, color: TextColor}}
          onValueChange={(itemValue) => test(itemValue)
          }
        >       
          <Picker.Item label={ListOfCountriesN[0]} value={ListOfCountriesN[0]} />
          <Picker.Item label={ListOfCountriesN[1]} value={ListOfCountriesN[1]} />
          <Picker.Item label={ListOfCountriesN[2]} value={ListOfCountriesN[2]} />
          <Picker.Item label={ListOfCountriesN[3]} value={ListOfCountriesN[3]} />
          <Picker.Item label={ListOfCountriesN[4]} value={ListOfCountriesN[4]} />
          <Picker.Item label={ListOfCountriesN[5]} value={ListOfCountriesN[5]} />
          <Picker.Item label={ListOfCountriesN[6]} value={ListOfCountriesN[6]} />
          <Picker.Item label={ListOfCountriesN[7]} value={ListOfCountriesN[7]} />
          <Picker.Item label={ListOfCountriesN[8]} value={ListOfCountriesN[8]} />
          <Picker.Item label={ListOfCountriesN[9]} value={ListOfCountriesN[9]} />
          <Picker.Item label={ListOfCountriesN[10]} value={ListOfCountriesN[10]} />
          <Picker.Item label={ListOfCountriesN[11]} value={ListOfCountriesN[11]} />
          <Picker.Item label={ListOfCountriesN[12]} value={ListOfCountriesN[12]} />
          <Picker.Item label={ListOfCountriesN[13]} value={ListOfCountriesN[13]} />
          <Picker.Item label={ListOfCountriesN[14]} value={ListOfCountriesN[14]} />
          <Picker.Item label={ListOfCountriesN[15]} value={ListOfCountriesN[15]} />
          <Picker.Item label={ListOfCountriesN[16]} value={ListOfCountriesN[16]} />
          <Picker.Item label={ListOfCountriesN[17]} value={ListOfCountriesN[17]} />
          <Picker.Item label={ListOfCountriesN[18]} value={ListOfCountriesN[18]} />
          <Picker.Item label={ListOfCountriesN[19]} value={ListOfCountriesN[19]} />
          <Picker.Item label={ListOfCountriesN[20]} value={ListOfCountriesN[20]} />
          <Picker.Item label={ListOfCountriesN[21]} value={ListOfCountriesN[21]} />      
        </Picker>
      }

      <Text style ={styles.text}> 
            {'\n'} البلد المختارة: {'\n'}     {SelectedValue}    {'\n'}{'\n'}{'\n'}            
      </Text>

      <Text style ={styles.text}> 
          اضغط لتفعيل الوضع الليلى  {'\n'}        </Text>
        </Text>
      <Switch value ={DarkTheme}
      onValueChange={(value)=> setDarkTheme(value)}
      trackColor= {{true: "white"}}      
      />
<Text style ={styles.text}> 
            {'\n'} الوضع الحالى: {'\n'}          {CurrentTheme}        
      </Text>
      <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        <Button styles= {styles.Button} 
        title="متابعة"
        disabled = {BottonDis}
         onPress={() => navigation.navigate('MainTabsEnglish', { 
          params: { 
            language: 'English',
            country: 'Egypt' , 
            TotalDeaths: TotalDeaths, 
            Dates: Dates,
            TotalCountriesNames : TotallCountries,
            MiddleEastCountries: ListOfCountriesN,
            ChossenCountry: SelectedValue,
            DarkTheme: DarkTheme,
            WhiteTheme:WhiteTheme,
            CurrentTheme: CurrentTheme,
            BackgroundColor:BackgroundColor,
            TextColor:TextColor,

          }
      }    
          }   
        }
        )
      }   
          // onPress = {()=> GetCountry("Egypt")}         
        />
    </View>
  );
}

























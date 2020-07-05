import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Switch, Button } from "react-native";

//testing 
import {fetchCountriesDailyData} from '../Api'
import { set } from "react-native-reanimated";
import { DarkTheme } from "@react-navigation/native";
//

// testing 
const ListOfCountriesNCountries =  [ 'Algeria', 'Bahrain', 'Comoros', 'Djibouti', 'Egypt', 'Iraq', 'Jordan', 'Kuwait',
                               'Lebanon', 'Libya', 'Mauritania', 'Morocco', 'Oman', 'Palestine', 'Qatar',
                               'Saudi Arabia', 'Somalia', 'Sudan', 'Syria', 'Tunisia', 'UAE', 'Yemen' ]
// 
const renderItem = item => (

  item.country
  )

export default function CountryPageScreen({navigation}){
    const [SelectedValue, setSelectedValue] = useState(""); // Chossen country by the user to pass over to other pages 
    
    const [TotallCountries, setTotallCountries] = useState("") // to pass over to the next pages 
    const [ListOfCountriesN, setListOfCountriesN] = useState("")
    const [BottonDis,setBotton]= useState(true)
    const [DarkTheme,setDarkTheme]= useState(false)
    const [WhiteTheme,setWhiteTheme]= useState(true)
    const [BackgroundColor,setBackgroundColor]= useState('white')
    const [TextColor,setTextColor]= useState('black')
    const [CurrentTheme,setCurrentTheme]= useState('White')

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 70,
        alignItems: "center",
        backgroundColor: BackgroundColor
      }
    ,
      text: { 
  text: {
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
     
        const Final = results.map(renderItem)
        console.log(Final)
              
        //console.log(TotallCountries)
        console.log("-------------------------------------")
  

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
      }
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
        Choose a Country
        </Text>
                         
      </View>
      <Text>
      { ListOfCountriesN && 
        <Picker
          selectedValue={SelectedValue}
          style={{ height: 50, width: 160, color: TextColor}}
          onValueChange={function(itemValue) {setSelectedValue(itemValue)
          setBotton(false)}
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
            {'\n'} selected country: {'\n'}     {SelectedValue}    {'\n'}{'\n'}{'\n'}           
      </Text>

      <Text style ={styles.text}> 
        Choose your theme {'\n'} 
        </Text>
        </Text>
      <Switch value ={DarkTheme}
      onValueChange={(value)=> setDarkTheme(value)}
      trackColor= {{true: "white"}}      
      />
<Text style ={styles.text}> 
            {'\n'} selected theme: {'\n'}          {CurrentTheme}        
      </Text>
      <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        <Button styles= {styles.Button} 
        title="Next"
        disabled = {BottonDis}
         onPress={() => navigation.navigate('MainTabsEnglish', {
           params: { language: 'English', country: 'Egypt' }, 
          params: { language: 'English', country: 'Egypt' }, 
           params: { language: 'English', country: 'Egypt' }, 
          })
          }          
      }          
          }          
        />
    </View>
  );
}

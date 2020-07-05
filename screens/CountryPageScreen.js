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
        </Picker>
      }

      </Text>
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

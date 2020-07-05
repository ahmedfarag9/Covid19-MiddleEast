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

export default function CountryPageScreen({navigation}) {

  return (

      <Button
        title="Egypt"
        onPress={() => navigation.navigate('MainTabsEnglish', {
          params: { language: 'English', country: 'Egypt' }, 
      })
      }          
      />
    </View>
  );
}

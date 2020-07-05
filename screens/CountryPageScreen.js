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
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    //alignItems: 'center',
    //paddingTop: 10,
  },
  text: {
    textAlign: 'center',
    //fontWeight: 'bold',
    fontSize: 15
  },
  text2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
})  
  

export default function CountryPageScreen({navigation}) {

    return (
      <View style={styles.container}>

      <Button
        title="Egypt"
        onPress={() => navigation.navigate('MainTabsEnglish', {
          params: { language: 'English', country: 'Egypt' }, 
      })
      }          
      />
    </View>
    )
  }

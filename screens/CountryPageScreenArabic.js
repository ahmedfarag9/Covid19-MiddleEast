import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Switch, Button } from "react-native";


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
  

export default function CountryPageScreenArabic({navigation}) {

    return (
      <View style={styles.container}>

      <Button
        title="مصر"
        onPress={() => navigation.navigate('MainTabsArabic', {
          screen: 'DailyUpdateScreenArabic',
          params: { language: 'Arabic', country: 'Egypt' }, 
        })
      }          
      />
    </View>
    )
  }

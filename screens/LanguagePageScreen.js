import * as React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'


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
  

export default function LanguagePageScreen({navigation}) {

    return (
      <View style={styles.container}>

      <Button
        title="English"
        onPress={() => navigation.navigate('CountryPageScreen')
      }          
      />

      <Button
        title="عربى"
        onPress={() => navigation.navigate('CountryPageScreenArabic')
      }          
      />
    </View>
    )
  }

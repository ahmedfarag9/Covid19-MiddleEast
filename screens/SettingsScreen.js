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
    fontSize: 15,
    color: 'black'
  },
  })
  

export default function SettingsScreen({route, navigation}) {

  const  { country }   = route.params
  const  { language }  = route.params

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings coming soon.</Text>
      </View>
    )
  }

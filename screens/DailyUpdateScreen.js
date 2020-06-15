import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import {fetchCountriesDailyData} from '../Api'
function Countries() {

  const [Country, setCountry] = useState("") 

  return (

    <View style={styles.container}>

      <Button
        title="Refresh"
        onPress={() => {
          GetCountries()
        }}
      />


    </View>


  )

}

export default function DailyUpdateScreen() {

  //Countries()

  return (
    <Countries/>
  )
}


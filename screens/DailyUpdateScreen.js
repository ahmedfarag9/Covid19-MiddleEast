import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import {fetchCountriesDailyData} from '../Api'
const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      flex: 1,
      flexDirection: "column",
      backgroundColor: "black",
      alignItems: 'center',
      paddingTop: 40,
      //paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      alignContent : "stretch"
    },
  })

function Countries() {

  const [Country, setCountry] = useState("") 

  const GetCountries = async () => {
    const results = await fetchCountriesDailyData()
    //this.setState({movies: results})
    //this.setState({showMovies: true})
        //this.handleSubmit()
    console.log("finished")
    setCountry(results)
  }


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


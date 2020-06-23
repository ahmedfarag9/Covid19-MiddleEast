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
    container2:{
      justifyContent: "center",
      flex: 0.8,
      flexDirection: "row",
      backgroundColor: "black",
      alignItems: 'center',
      paddingTop: 5,
      //paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    
    },
    container3:{
      justifyContent: "space-between",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "black",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    
    },
    container4:{
      justifyContent: "space-between",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "black",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    
    },

    container5:{
      justifyContent: "space-between",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "black",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360,
      //alignSelf: "center"
    
    },
    container6:{
      justifyContent: "center",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "black",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    },
    text: {
      textAlign: 'center',
      paddingTop: 0,
      fontSize: 40,
      fontWeight: "bold",
      color: "white"
    },
    text3: {
      textAlign: 'center',
      paddingTop: 20,
      fontSize: 15,
      //fontWeight: "bold",
      color: "white"
    },
    text2: {
      justifyContent: "center",
      textAlign: 'center',
      //paddingTop: 30,
      fontSize: 40 ,
      fontWeight: "bold",
      color: "white"
    },
    circle: {
      backgroundColor: "black",
      //alignSelf: "center",
      height: 100,
      width: 140,
      //borderRadius: 95/2,
      //flex: 2
      //paddingTop: 10,
      //paddingBottom: 10,
    }
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

  if (Country === "") {
    GetCountries()
  }    

  //GetCountries()

  return (

    <View style={styles.container}>

      <View style={[styles.container2,{}]}>
        <Text style={styles.text2}>{Country.country}    1/1/2020{Country.Date}</Text>
      </View>

      <View style={styles.container3}>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.todayCases} </Text>
          <Text style={styles.text3}>New Cases </Text>
        </View>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.cases} </Text>
          <Text style={styles.text3}>Total Cases </Text>
        </View>
      </View>

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


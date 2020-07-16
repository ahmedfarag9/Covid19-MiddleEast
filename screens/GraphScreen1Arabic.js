import * as React from 'react';
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { useState } from 'react'
import {fetchCountryData, fetchCountryID} from '../Api'
import { Dimensions } from "react-native";
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit"

const styles = StyleSheet.create({
    container: {
      flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'black' 
    },
    text: {
      textAlign: 'center',
    },
  })
  const processDates = item => (
    item.Date
  )
  const processTotalCases = item => (
    parseInt(item.Confirmed)
  )
  export default function GraphsScreen1Arabic(){

    const [Dates, setDates] = useState(null)
    const [TotalCases, setTotalCases] = useState(null) 
  
    const GetCountry = async () => {
      const results = await fetchCountryID()
      //this.setState({movies: results})
      //this.setState({showMovies: true})
          //this.handleS`ubmit()
      //console.log(results)
      const x = results.map(processDates)
      setDates(x)
     // console.log(x)
      
      
  
      const y = results.map(processTotalCases)
      //console.log(y)
      setTotalCases(y)
      //console.log("finished")
    }
   
    const data = {
        labels: Dates,
        //datasets: TotalCases,
        datasets: [
        {
          data: TotalCases
        }
        ]
      };
      
    //GetCountry()


      return (
        <ScrollView horizontal={true}>
        <View  style={styles.container}>
          <Text>العدد الكلى للمصابين</Text>
          <Button
            title="Refresh"
            onPress={() => {
              GetCountry()
            }}
          />


          
          


        </View>
        </ScrollView>
      )
    }


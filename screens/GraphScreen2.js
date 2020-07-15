import * as React from 'react';
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { useState } from 'react'
import {fetchCountriesDailyData, fetchCountryID} from '../Api'
import { Dimensions } from "react-native";
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit"

const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 16,
        paddingTop: 30, backgroundColor: 'black' 
    },
    text: {
      textAlign: 'center',
    },
  })

  


  const processDates = item => (
    item.Date
  )


  const processNewDeaths = item => (
    parseInt(item.todayDeaths)
  )


  export default function GraphsScreen2()  {



    const [Dates, setDates] = useState(null)
      const [NewDeaths, setNewDeaths] = useState(null) 
      
      
      const GetCountry = async () => {
        const results = await fetchCountryID()
        const  results2 = await fetchCountriesDailyData()
  
        console.log(results2)
        const x = results.map(processDates)
        setDates(x)
   
        
        const y = results2.map(processNewDeaths)
        setNewDeaths(y) 
        console.log(y)    
      }

    
  
    return (
      <View>
      <Text>Default View</Text>
    </View>      
    )
  } 

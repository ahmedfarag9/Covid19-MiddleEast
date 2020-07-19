import * as React from 'react';
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { useState } from 'react'
import {fetchCountriesDailyData, fetchCountryID} from '../Api'
import { Dimensions } from "react-native";
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit"


  export default function GraphsScreen3Arabic({route}){
    const styles = StyleSheet.create({
      container: {
        flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'black' 
      },
      text: {
        textAlign: 'center',
      },
    })
  

    const  { TotalDeaths,Dates }   = route.params

    const [Dates1, setDates1] = useState(Dates)
    const [TotalDeaths1, setTotalDeaths1] = useState(TotalDeaths)


    //console.log(Dates1)
    //console.log(TotalDeaths1)
    
    
    
   
    return (
      <View>
      <Text>Default View</Text>
    </View>      
    )
  }
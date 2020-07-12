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


export default function GraphsScreen4()  {

    return (
      <View>
      <Text>Default View</Text>
    </View>      
    )
  }
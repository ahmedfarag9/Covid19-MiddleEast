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
  export default function GraphsScreen1(){

    const [Dates, setDates] = useState(null)
    const [TotalCases, setTotalCases] = useState(null) 
      return (
      <View>
        <Text>Default View</Text>
      </View>      
      )
    }
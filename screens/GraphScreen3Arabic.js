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
  

    return (
      <View>
      <Text>Default View</Text>
    </View>      
    )
  }
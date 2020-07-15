import * as React from 'react';
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { useState } from 'react'
import {fetchCountriesDailyData, fetchCountryID} from '../Api'
import { Dimensions } from "react-native";
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit"



export default function GraphsScreen2()  {

    return (
      <View>
      <Text>Default View</Text>
    </View>      
    )
  }
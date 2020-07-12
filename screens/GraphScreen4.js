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

    
  
  
      
     
      const data = {
          labels: Dates,
          //datasets: TotalCases,
          datasets: [
          {
            data: NewDeaths
          }
          ]
        };

    // const data = {
    //     labels: ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5", "Jan 6",
    //     "Jan 7", "Jan 8", "Jan 9", "Jan 10", "Jan 11", "Jan 12",
    //     "Jan 13", "Jan 14", "Jan 15", "Jan 16", "Jan 17", "Jan 18",
    //     "Jan 19", "Jan 20", "Jan 21", "Jan 21", "Jan 22", "Jan 23",
    //     "Jan 24", "Jan 25", "Jan 26", "Jan 27", "Jan 28", "Jan 29",
    //     "Jan 30",
    //   ],
    //   datasets: [
    //     {
    //       data: [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    //     }
    //   ]
    
    //   };
    
    
    return (
      <ScrollView horizontal={true}>
      <View  style={styles.container}>
        <Text>Daily New Deaths in Egypt</Text>

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
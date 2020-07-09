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
          <Text>Total Coronavirus Cases in Egypt</Text>
          <Button
            title="Refresh"
            onPress={() => {
              GetCountry()
            }}
          />


          
          


          {Dates && TotalCases && (
            <LineChart
              data={data}
              //width={Dimensions.get("window").width} // from react-native
              height={550}
              width={700}
              //yAxisSuffix="k"
              yAxisInterval={30} // optional, defaults to 1
              verticalLabelRotation={90}
              segments={3}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 0, // optional, defaults to 2dp
                //segments: 5,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          )}

        </View>
        </ScrollView>
      )
    }
import * as React from 'react';
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { useState } from 'react'
import {fetchCountriesDailyData, fetchCountryID} from '../Api'
import { Dimensions } from "react-native";
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit"
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


  function Countries(props){

    const styles = StyleSheet.create({
      container: {
        flex: 1, padding: 0, paddingTop: 0, backgroundColor: 'white' 
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
    
    
    
   
    const data = {
        labels: Dates1,
        //datasets: TotalCases,
        datasets: [
        {
          data: TotalDeaths1
        }
        ]
      };     

    return (
      <ScrollView horizontal={true}>


      <View  style={styles.container}>
        <Text>العدد الكلى للمتوفين</Text>


        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white"}}>
      </View> 



        {/* <Button
          title="Refresh"
          onPress={() => {
            GetCountry()
          }}
        /> */}

        {Dates && TotalDeaths && (
          <LineChart
            data={data}
            //width={Dimensions.get("window").width} // from react-native
            height={530}
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
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
  


    const [Country, setCountry] = useState(props.Data.ChossenCountry)
    const [ChossenCountryData, setChossenCountryData] = useState(props.Data.ChossenCountryData)
    const [language, setlanguage] = useState(props.Data.language)
    const [MiddleEastCountries, setMiddleEastCountries] = useState(props.Data.MiddleEastCountries)
    const [DarkTheme, setDarkTheme] = useState(props.Data.DarkTheme)
    const [WhiteTheme, setWhiteTheme] = useState(props.Data.WhiteTheme)
    const [CurrentTheme, setCurrentTheme] = useState(props.Data.CurrentTheme)
    const [BackgroundColor, setBackgroundColor] = useState(props.Data.BackgroundColor)
    const [TextColor, setTextColor] = useState(props.Data.TextColor)
    const [todayDate, settodayDate] = useState("1/1/2020")
    const [TotalCountriesData, setTotalCountriesData] = useState(props.Data.TotalCountriesData)
    const [MiddleEastCountriesData, setMiddleEastCountriesData] = useState(props.Data.MiddleEastCountriesData)
    const [Tmp, setTmp] = useState(true)

    const [DailyNewCases, setDailyNewCases] = useState(props.Data.DailyNewCases)
    const [DailyNewCasesDates, setDailyNewCasesDates] = useState(props.Data.DailyNewCasesDates)
    const [DailyNewDeaths, setDailyNewDeaths] = useState(props.Data.DailyNewDeaths)
    const [DailyNewDeathsDates, setDailyNewDeathsDates] = useState(props.Data.DailyNewDeathsDates)

    const [TotalDeaths, setTotalDeaths] = useState(props.Data.TotalDeaths)
    const [TotalDeathsDates, setTotalDeathsDates] = useState(props.Data.TotalDeathsDates)
    const [TotalCases, setTotalCases] = useState(props.Data.TotalCases)
    const [TotalCasesDates, setTotalCasesDates] = useState(props.Data.TotalCasesDates)

     
      const data = {
          labels: DailyNewDeathsDates,
          //datasets: TotalCases,
          datasets: [
          {
            data: DailyNewDeaths
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
    
    // Set global test device ID
    setTestDeviceIDAsync('ANDROID');



    return (
      <View  style={styles.container}>
        <Text>عدد الوفيات اليومية</Text>

        <ScrollView horizontal={true}>

        {/* <Button
            title="Refresh"
            onPress={() => {
              GetCountry()
            }}
          /> */}
      
      {DailyNewDeathsDates && DailyNewDeaths && (
          <BarChart
            data={data}
            //width={Dimensions.get("window").width} // from react-native
            width={1100}
            height={550}
            yAxisSuffix=""
            yAxisInterval={30} // optional, defaults to 1
            verticalLabelRotation={90}
            segments={3}
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 0.1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  //borderRadius: 200,
                },
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
            }}
            style={{
                marginVertical: 0,
                marginHorizontal: 5,
                borderRadius: 16,
                //paddingRight: 10
            }}
          />
      )}
      </ScrollView>

        <View style={[{paddingLeft: 20}]}>


          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
            //onDidFailToReceiveAdWithError={this.bannerError} 
          />

        </View>

        </View>

    )
  } 






  export default function GraphsScreen4Arabic({route}) {

    const data    = route.params
  
  
    return (
      <Countries
        Data = {data}      
      />
    )
  }
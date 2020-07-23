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
        labels: TotalDeathsDates,
        //datasets: TotalCases,
        datasets: [
        {
          data: TotalDeaths
        }
        ]
      };  
      
    // Set global test device ID
    setTestDeviceIDAsync('ANDROID');
   
      
    return (

      <View  style={styles.container}>
        <Text>العدد الكلى للمتوفين</Text>

        <ScrollView horizontal={true}>

        {/* <View style={{ flex: 1, alignItems: "center", backgroundColor: "white"}}>
      </View>  */}



        {/* <Button
          title="Refresh"
          onPress={() => {
            GetCountry()
          }}
        /> */}

{TotalDeathsDates && TotalDeaths && (
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



  export default function GraphsScreen3Arabic({route}) {

    const data    = route.params
  
  
    return (
      <Countries
        Data = {data}      
      />
    )
  }
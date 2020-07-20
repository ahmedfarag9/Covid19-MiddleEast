import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import {fetchCountriesDailyData} from '../Api'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      alignContent : "stretch"
    },
    container2:{
      justifyContent: "center",
      flex: 0.8,
      flexDirection: "row",
      backgroundColor: "white",
      alignItems: 'center',
      paddingTop: 5,
      //paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    
    },
    container3:{
      justifyContent: "space-between",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "white",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    
    },
    container4:{
      justifyContent: "space-between",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "white",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    
    },

    container5:{
      justifyContent: "space-between",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "white",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360,
      //alignSelf: "center"
    
    },
    container6:{
      justifyContent: "center",
      flex: 1.05,
      flexDirection: "row",
      backgroundColor: "white",
      alignItems: 'center',
      //paddingTop: 10,
      //paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      alignContent : "stretch",
      alignItems: "stretch",
      width: 360
    },
    text: {
      textAlign: 'center',
      paddingTop: 0,
      fontSize: 40,
      fontWeight: "bold",
      color: "black"
    },
    text3: {
      textAlign: 'center',
      paddingTop: 20,
      fontSize: 15,
      //fontWeight: "bold",
      color: "black"
    },
    text2: {
      justifyContent: "center",
      textAlign: 'center',
      //paddingTop: 30,
      fontSize: 40 ,
      fontWeight: "bold",
      color: "black"
    },
    circle: {
      backgroundColor: "white",
      //alignSelf: "center",
      height: 100,
      width: 140,
      //borderRadius: 95/2,
      //flex: 2
      //paddingTop: 10,
      //paddingBottom: 10,
    }
  })

const middleEastCountries =  [ 'Algeria', 'Bahrain', 'Comoros', 'Djibouti', 'Egypt', 'Iraq', 'Jordan', 'Kuwait',
'Lebanon', 'Libya', 'Mauritania', 'Morocco', 'Oman', 'Palestine', 'Qatar',
'Saudi Arabia', 'Somalia', 'Sudan', 'Syria', 'Tunisia', 'UAE', 'Yemen' ]


function Countries(props) {

  // 

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

  // Get today's date
  /*const today = new Date();
  const dd = today.getDate();  
  const mm = today.getMonth()+1; 
  const yyyy = today.getFullYear();
  if(dd<10) 
  {
      const dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  }
  const today1 = dd+'/'+mm+'/'+yyyy;
  setDate(today1)*/



  // Set global test device ID
  setTestDeviceIDAsync('ANDROID');


  return (

    <View style={styles.container}>

  
      <View style={[styles.container2,{}]}>
        <Text style={styles.text2}>{ChossenCountryData.country}</Text>
        <Text style={styles.text2}>   {todayDate}</Text>
      </View>

      <View style={styles.container3}>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{ChossenCountryData.todayCases}</Text>
          <Text style={styles.text3}>New Cases </Text>
        </View>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{ChossenCountryData.cases}</Text>
          <Text style={styles.text3}>Total Cases</Text>
        </View>
      </View>

      <View style={styles.container4}>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{ChossenCountryData.todayDeaths}</Text>
          <Text style={styles.text3}>New Deaths</Text>
        </View>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{ChossenCountryData.deaths}</Text>
          <Text style={styles.text3}>Total Deaths</Text>
        </View>
      </View>

      <View style={styles.container5}>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{ChossenCountryData.active}</Text>
          <Text style={styles.text3}>Active Cases</Text>
        </View>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{ChossenCountryData.critical}</Text>
          <Text style={styles.text3}>Critical Cases</Text>
        </View>
      </View>

      <View style={styles.container6}>
        <View style={[styles.circle,{alignSelf: "center"}]}> 
          <Text style={styles.text}>{ChossenCountryData.recovered}</Text>
          <Text style={styles.text3}>Total Recovered</Text>
        </View>
      </View>

      {/* <Button
        title="Refresh"
        onPress={() => {
          GetCountries()
        }}
      /> */}

      {/* <Text>{"\n"}</Text> */}

      {/* // Display a banner */}


        <View style={[{paddingLeft: 0}]}>


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


export default function DailyUpdateScreen({route}) {

  const data    = route.params
//  const {ChossenCountryData}    = route.params


  return (
    <Countries
      Data = {data}      
    />
  )
}


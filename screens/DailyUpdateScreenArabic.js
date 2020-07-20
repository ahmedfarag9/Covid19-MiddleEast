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
    const mm = today.getMonth()+1; 
  const mm = today.getMonth()+1; 
  const yyyy = today.getFullYear();
  if(dd<10) 
    if(dd<10) 
  if(dd<10) 
  {
      const dd='0'+dd;
  } 
  if(mm<10) 
    if(mm<10) 
  if(mm<10) 
  {
      mm='0'+mm;
  }
  const today1 = dd+'/'+mm+'/'+yyyy;
  setDate(today1)*/


      const resultsTmp = [];
      for (const element of resultsTmp0) {
        // if (element.country in middleEastCountries) {
          if (middleEastCountries.includes(element.country)) {
          resultsTmp.push(element)
        }
      }
      console.log(resultsTmp)
  
      for (const element of resultsTmp) {
        // if (element.country in middleEastCountries) {
          if (element.country === ChosenCountry) {
          setCountry(element)
          console.log(element.country)
          }
        }
      setResults(resultsTmp)
      }
  
    if (Country === "") {
      GetCountries()
      }    
    
    //GetCountries()
  

  return (

    <View style={styles.container}>

      <View style={[styles.container2,{}]}>
        <Text style={styles.text2}>{Country.country}</Text>
      </View>

      <View style={styles.container3}>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.todayCases}</Text>
          <Text style={styles.text3}>الاصابات الجديدة</Text>
        </View>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.cases}</Text>
          <Text style={styles.text3}>اجمالى الاصابات</Text>
        </View>
      </View>

      <View style={styles.container4}>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.todayDeaths}</Text>
          <Text style={styles.text3}>الوفيات الجديدة</Text>
        </View>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.deaths}</Text>
          <Text style={styles.text3}>اجمالى الوفيات</Text>
        </View>
      </View>

      <View style={styles.container5}>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.active}</Text>
          <Text style={styles.text3}>الحالات النشطة</Text>
        </View>
        <View style={[styles.circle,{}]}> 
          <Text style={styles.text}>{Country.critical}</Text>
          <Text style={styles.text3}>الحالات الحرجة</Text>
        </View>
      </View>

      <View style={styles.container6}>
        <View style={[styles.circle,{alignSelf: "center"}]}> 
          <Text style={styles.text}>{Country.recovered}</Text>
          <Text style={styles.text3}>المتعافون</Text>
        </View>
      </View>

      <Button
        title="تحديث"
        onPress={() => {
          GetCountries()
        }}
      />

    </View>

  )

}


export default function DailyUpdateScreenArabic({route}) {

  const  { country }   = route.params

  return (
    <Countries
    ChosenCountry = {country}      
    />
  )
}


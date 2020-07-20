import * as React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    //alignItems: 'center',
    paddingTop: 70,
    //paddingLeft: 0
  },
  text: {
    textAlign: 'center',
    //fontWeight: 'bold',
    fontSize: 15,
    color: 'black'
  },
  text2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black'
  },
})  
  

export default function SettingsScreen({route, navigation}) {

  const  { country }   = route.params
  const  { language }  = route.params

  // Set global test device ID
  setTestDeviceIDAsync('ANDROID');



    return (
      <View style={styles.container}>

        <Text style={styles.text2}>Settings{'\n'}</Text>


        <Text style={styles.text}>Current language: {language}  {'\n'}{'\n'}</Text>
        <Text style={styles.text}>Change language:{'\n'}{'\n'}</Text>

        <Button
          title="عربى"
          onPress={() => navigation.navigate('CountryPageScreenArabic')
        }          
        />
        <Button
          title="English"
          onPress={() => navigation.navigate('CountryPageScreen')
        }          
        />


        <Text style={styles.text}>{'\n'}{'\n'}{'\n'}{'\n'}Current Country: {country}  {'\n'}{'\n'}</Text>
        <Text style={styles.text}>Choose a country:{'\n'}{'\n'}</Text>

        <Button
        title="Change Country"
        onPress={() => navigation.navigate('CountryPageScreen')}          
        />

        {/* <Button
          onPress={() =>
            navigation.setParams({
              country:'USA'
                //route.params.country === 'USA',
            })
          }
          title="Change country"
        /> */}

      </View>
    )
  }

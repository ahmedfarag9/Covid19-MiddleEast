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
    paddingTop: 100,
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


export default function SettingsScreenArabic({route, navigation}) {

  const  { country }   = route.params
  const  { language }  = route.params

  // Set global test device ID
  setTestDeviceIDAsync('ANDROID');




  return (
    <View style={styles.container}>

      <Text style={styles.text}>الاعدادات:{'\n'}</Text>

      <Text style={styles.text}>اللغة المختارة حاليا: {language}  {'\n'}{'\n'}</Text>

      <Text style={styles.text}>تغيير اللغة:{'\n'}{'\n'}</Text>

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


      <Text style={styles.text}>{'\n'}{'\n'}{'\n'}{'\n'}الدولة المختارة حاليا: {country}  {'\n'}{'\n'}</Text>
      <Text style={styles.text}>تغيير البلد:{'\n'}{'\n'}</Text>

      <Button
        title="تغيير البلد"
        onPress={() => navigation.navigate('CountryPageScreenArabic')}
      />

    </View>
  )
}


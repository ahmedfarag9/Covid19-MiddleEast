import * as React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: "orange"
    },
    text: {
      textAlign: 'center',
    },
  })
  

export default function NewsScreenArabic()  {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>الأخبار سوف تضاف قريبا.</Text>
      </View>
    )
  }
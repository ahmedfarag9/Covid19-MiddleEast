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
  

export default function NewsScreen({route, navigation})  {


  const  { country }   = route.params
  //const  { language }  = route.params

    return (

    )
  }
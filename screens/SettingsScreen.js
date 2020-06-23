import * as React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: "blue"
    },
    text: {
      textAlign: 'center',
    },
  })
  

export default function SettingsScreen() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings coming soon.</Text>
      </View>
    )
  }

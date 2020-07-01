import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {fetchCountriesDailyData} from '../Api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 0,
    paddingTop: 0,
    paddingLeft: 3,
    backgroundColor: 'white' 
    },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100'},
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});  


export default function DashboardWorldScreen() {

  return (
    <Countries/>
  )
}

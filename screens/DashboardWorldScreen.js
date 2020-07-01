import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {fetchCountriesDailyData} from '../Api'

const x = 80

const tableHeadConst = ['Country', 'Total Cases', 'New Cases', 'Total Deaths', 'New Deaths',
'Total Recovered', 'Active Cases', 'Critical Cases', 'Total Cases / 1M pop',
'Deaths / 1M pop', 'Total Tests', 'Tests / 1M pop'/*, 'Population'*/]

const widthArrConst = [x, x, x, x, x, x, x, x, x, x, x, x/*, x */]

const tableDataTmp = [];
/*for (let i = 0; i < 30; i += 1) {
  const rowData = [];
  for (let j = 0; j < 13; j += 1) {
    rowData.push(`${i}${j}`);
  }
  tableDataTmp.push(rowData);
}*/

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

function Countries(props) {

    const { ChosenCountry } = props
    //console.log(ChosenCountry)

    const [ChosenCountryTmp, setChosenCountry] = useState(ChosenCountry)

    const [tableHead, setTableHead] = useState(tableHeadConst)
    const [widthArr, setWidthArr] = useState(widthArrConst)
    const [results, setResults] = useState("")
    const [tableData, setTableData] = useState(tableDataTmp)

    return (
      <View style={styles.container}>

        <Button
            title="Refresh"
            onPress={() => {
              GetCountries()
            }}
          />
      </View>
    )
  }


export default function DashboardWorldScreen() {

  return (
    <Countries/>
  )
}

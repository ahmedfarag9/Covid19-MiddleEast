import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {fetchCountriesDailyData} from '../Api'

const tableHeadConst = ['Country', 'Total Cases', 'New Cases', 'Total Deaths', 'New Deaths',
                        'Total Recovered', 'Active Cases', 'Critical Cases', 'Total Cases / 1M pop',
                        'Deaths / 1M pop', 'Total Tests', 'Tests / 1M pop'/*, 'Population'*/]

const x = 80
const widthArrConst = [x, x, x, x, x, x, x, x, x, x, x, x/*, x */]

const tableDataTmp = [];
/*for (let i = 0; i < 30; i += 1) {
  const rowData = [];
  for (let j = 0; j < 13; j += 1) {
    rowData.push(`${i}${j}`);
  }
  tableDataTmp.push(rowData);
}*/

const middleEastCountries =  [ 'Algeria', 'Bahrain', 'Comoros', 'Djibouti', 'Egypt', 'Iraq', 'Jordan', 'Kuwait',
                               'Lebanon', 'Libya', 'Mauritania', 'Morocco', 'Oman', 'Palestine', 'Qatar',
                               'Saudi Arabia', 'Somalia', 'Sudan', 'Syria', 'Tunisia', 'UAE', 'Yemen' ]


const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16,
    paddingTop: 30,
    backgroundColor: 'black' 
    },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});  


function Countries() {

    const [tableHead, setTableHead] = useState(tableHeadConst)
    const [widthArr, setWidthArr] = useState(widthArrConst)
    const [results, setResults] = useState("")
    const [tableData, setTableData] = useState(tableDataTmp)

    const GetCountries = async () => {
      const resultsTmp0 = await fetchCountriesDailyData()
      const resultsTmp = [];
      for (const element of resultsTmp0) {
        // if (element.country in middleEastCountries) {
          if (middleEastCountries.includes(element.country)) {
          resultsTmp.push(element)
        }
      }
      console.log(resultsTmp)
      setResults(resultsTmp)
      
      const tableData1 = [];
      for (const element of resultsTmp) {
        const rowData = [];
        rowData.push(`${element.country}`);
        rowData.push(`${element.cases}`);
        rowData.push(`${element.todayCases}`);
        rowData.push(`${element.deaths}`);
        rowData.push(`${element.todayDeaths}`);
        rowData.push(`${element.recovered}`);
        rowData.push(`${element.active}`);
        rowData.push(`${element.critical}`);
        rowData.push(`${element.casesPerOneMillion}`);
        rowData.push(`${element.deathsPerOneMillion}`);
        rowData.push(`${element.totalTests}`);
        rowData.push(`${element.testsPerOneMillion}`);
        rowData.push(`${parseInt(1)*parseInt(1)}`);

        tableData1.push(rowData);
      }
      setTableData(tableData1)
    }

    if (results === "") {
      GetCountries()
    }
 
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

export default function DashboardMiddleEastScreenEnglish() {
  return (
    <Countries/>
  )
}


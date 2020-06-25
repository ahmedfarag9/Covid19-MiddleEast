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



function Countries() {

    const GetCountries = async () => {
      const resultsTmp0 = await fetchCountriesDailyData()
      const resultsTmp = [];
      for (const element of resultsTmp0) {
        // if (element.country in middleEastCountries) {
          if (middleEastCountries.includes(element.country)) {
          resultsTmp.push(element)
        }
      }

    }

    }
  }


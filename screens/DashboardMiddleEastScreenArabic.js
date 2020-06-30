import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {fetchCountriesDailyData} from '../Api'

const tableHeadConst = ['الدولة', 'اجمالى الاصابات', 'الاصابات الجديدة', 'اجمالى الوفيات', 'الوفيات الجديدة',
'المتعافون', 'الحالات النشطة', 'الحالات الحرجة', 'عدد الاصابات / مليون نسمة',
'عدد الوفيات / مليون نسمة', 'عدد الاختبارات ', 'عدد الاختبارات / مليون نسمة'/*, 'عدد السكان'*/]

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


function Countries(props) {

    return (
      <View style={styles.container}>
  }
    )
  }

export default function DashboardMiddleEastScreenArabic(route) {
  const  { country }   = route.route.params

  return (
    <Countries
      ChosenCountry = {country}          
    />
  )
}


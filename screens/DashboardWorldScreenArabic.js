import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {fetchCountriesDailyData} from '../Api'

const tableHeadConst = ['الدولة', 'اجمالى الاصابات', 'الاصابات الجديدة', 'اجمالى الوفيات', 'الوفيات الجديدة',
'المتعافون', 'الحالات النشطة', 'الحالات الحرجة', 'عدد الاصابات / مليون نسمة',
'عدد الوفيات / مليون نسمة', 'عدد الاختبارات ', 'عدد الاختبارات لكل مليون نسمة'/*, 'عدد السكان'*/]

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 16,
    paddingTop: 0,
    backgroundColor: 'white' 
    },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});  


function Countries(props) {

 
    return (
      <View style={styles.container}>

      </View>
    )
  }


export default function DashboardWorldScreenArabic() {

  return (
    <Countries/>
  )
}

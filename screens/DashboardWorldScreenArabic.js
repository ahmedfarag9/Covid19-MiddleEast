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

  const { ChosenCountry } = props
  //console.log(ChosenCountry)

    const [ChosenCountryTmp, setChosenCountry] = useState(ChosenCountry)

    const [tableHead, setTableHead] = useState(tableHeadConst)
    const [widthArr, setWidthArr] = useState(widthArrConst)
    const [results, setResults] = useState("")
    const [tableData, setTableData] = useState(tableDataTmp)


    const GetCountries = async () => {
      const resultsTmp = await fetchCountriesDailyData()
      //this.setState({movies: results})
      //this.setState({showMovies: true})
          //this.handleSubmit()
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
        //rowData.push(`${parseInt(1)*parseInt(1)}`);

        tableData1.push(rowData);
        // for (let j = 0; j < 11; j += 1) {
        //   rowData.push(`${element.country}`);
        // }
      }
      setTableData(tableData1)

    }


    if (results === "") {
      GetCountries()
    }
 
    return (
      <View style={styles.container}>

        <Button
            title="تحديث"
            onPress={() => {
              GetCountries()
            }}
          />

      </View>
    )
  }


export default function DashboardWorldScreenArabic() {

  return (
    <Countries/>
  )
}

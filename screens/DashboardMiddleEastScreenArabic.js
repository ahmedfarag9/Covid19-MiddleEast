import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {fetchCountriesDailyData} from '../Api'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


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


    const [Country, setCountry] = useState(props.Data.ChossenCountry)
    const [ChossenCountryData, setChossenCountryData] = useState(props.Data.ChossenCountryData)
    const [language, setlanguage] = useState(props.Data.language)
    const [MiddleEastCountries, setMiddleEastCountries] = useState(props.Data.MiddleEastCountries)
    const [DarkTheme, setDarkTheme] = useState(props.Data.DarkTheme)
    const [WhiteTheme, setWhiteTheme] = useState(props.Data.WhiteTheme)
    const [CurrentTheme, setCurrentTheme] = useState(props.Data.CurrentTheme)
    const [BackgroundColor, setBackgroundColor] = useState(props.Data.BackgroundColor)
    const [TextColor, setTextColor] = useState(props.Data.TextColor)
    const [todayDate, settodayDate] = useState("1/1/2020")
    const [tableHead, setTableHead] = useState(tableHeadConst)
    const [widthArr, setWidthArr] = useState(widthArrConst)
    const [TotalCountriesData, setTotalCountriesData] = useState(props.Data.TotalCountriesData)
    const [MiddleEastCountriesData, setMiddleEastCountriesData] = useState(props.Data.MiddleEastCountriesData)
    const [tableData, setTableData] = useState(tableDataTmp)
    const [Tmp, setTmp] = useState(true)


    const SetData = () => {

      const tableData1 = [];
       for (const element of MiddleEastCountriesData) {
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
      setTmp(false)

    }

    if (results === "") {
      GetCountries()
    }

    // Set global test device ID
    setTestDeviceIDAsync('ANDROID');
 


    return (
      <View style={styles.container}>

        <Button
            title="تحديث"
            onPress={() => {
              GetCountries()
            }}
          />

        <ScrollView horizontal={true}>      
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>

        <View style={[{paddingLeft: 20}]}>


          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
            //onDidFailToReceiveAdWithError={this.bannerError} 
          />

        </View>


      </View>
    )
  }

export default function DashboardMiddleEastScreenArabic({route}) {
  
  const data    = route.params

  return (
    <Countries
      Data = {data}      
    />
  )
}


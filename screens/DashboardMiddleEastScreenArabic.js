import * as React from 'react'
import { useState } from 'react'
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {fetchCountriesDailyData} from '../Api'

const tableHeadConst = ['الدولة', 'اجمالى الاصابات', 'الاصابات الجديدة', 'اجمالى الوفيات', 'الوفيات الجديدة',
'المتعافون', 'الحالات النشطة', 'الحالات الحرجة', 'عدد الاصابات / مليون نسمة',
'عدد الوفيات / مليون نسمة', 'عدد الاختبارات ', 'عدد الاختبارات / مليون نسمة'/*, 'عدد السكان'*/]

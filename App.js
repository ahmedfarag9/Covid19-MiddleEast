import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Start Screens
import LanguagePageScreen from './screens/LanguagePageScreen'
import CountryPageScreen from './screens/CountryPageScreen'
import CountryPageScreenArabic from './screens/CountryPageScreenArabic'

// English Screens
import DailyUpdateScreen from './screens/DailyUpdateScreen'
import GraphScreen1 from './screens/GraphScreen1'
import GraphScreen2 from './screens/GraphScreen2'
import GraphScreen3 from './screens/GraphScreen3'
import GraphScreen4 from './screens/GraphScreen4'
import DashboardMiddleEastScreen from './screens/DashboardMiddleEastScreen'
import DashboardCountryScreen from './screens/DashboardCountryScreen'
import DashboardWorldScreen from './screens/DashboardWorldScreen'
import NewsScreen from './screens/NewsScreen'
import SettingsScreen from './screens/SettingsScreen'

// Arabic Screens
import DailyUpdateScreenArabic from './screens/DailyUpdateScreenArabic'
import GraphScreen1Arabic from './screens/GraphScreen1Arabic'
import GraphScreen2Arabic from './screens/GraphScreen2Arabic'
import GraphScreen3Arabic from './screens/GraphScreen3Arabic'
import GraphScreen4Arabic from './screens/GraphScreen4Arabic'
import DashboardMiddleEastScreenArabic from './screens/DashboardMiddleEastScreenArabic'
import DashboardCountryScreenArabic from './screens/DashboardCountryScreenArabic'
import DashboardWorldScreenArabic from './screens/DashboardWorldScreenArabic'
import NewsScreenArabic from './screens/NewsScreenArabic'
import SettingsScreenArabic from './screens/SettingsScreenArabic'


// Main stack Nav
const MainStack = createStackNavigator();

function MyStack() {
  return (
	<MainStack.Navigator initialRouteName="LanguagePageScreen" screenOptions={{ headerTintColor: '#a41034', headerStyle: { backgroundColor: '#fff'}, }}>
      <MainStack.Screen name="LanguagePageScreen" component={LanguagePageScreen} options={{title: 'Choose your language / اختر اللغة'}}/>
      <MainStack.Screen name="CountryPageScreen" component={CountryPageScreen} options={{title: 'Choose a country'}}/>
      <MainStack.Screen name="CountryPageScreenArabic" component={CountryPageScreenArabic} options={{title: 'اختر البلد'}}/>
      <MainStack.Screen name="MainTabsEnglish" component={MainTabsEnglish} options={{title: 'WELCOME TO COVID19 MIDDLE EAST'}}/>
      <MainStack.Screen name="MainTabsArabic" component={MainTabsArabic} options={{title: 'أهلا بك فى كوفيد 19 الشرق الأوسط'}}/>
  </MainStack.Navigator>
  );
}

// English Main tab Nav
const Tab1English = createBottomTabNavigator();

function MainTabsEnglish(props) {
  return (
    <Tab1English.Navigator
      initialRouteName="DailyUpdateScreen"
      tabBarOptions={{
        style: {
          marginBottom: 3,
          paddingBottom: 8,
        }
      }}
    >
      <Tab1English.Screen
        name="DailyUpdateScreen"
        component={DailyUpdateScreen}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'Daily Update',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
       {/* <Tab1English.Screen
        name="GraphsScreenEnglish"
        component={Tabs3English}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'Graphs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab1English.Screen
        name="DashboardMiddleEastScreen"
        component={Tabs2English}
        initialParams={props.route.params.params}        
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab1English.Screen
        name="NewsScreen"
        component={NewsScreen}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab1English.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

    </Tab1English.Navigator>
  );
}


// Arabic Main tab Nav
const Tab1Arabic = createBottomTabNavigator();

function MainTabsArabic(props) {
  return (
    <Tab1Arabic.Navigator
      initialRouteName="DailyUpdateScreenArabic"
      tabBarOptions={{
        style: {
          marginBottom: 3,
          paddingBottom: 8,
        }
      }}
    >
      <Tab1Arabic.Screen
        name="DailyUpdateScreenArabic"
        component={DailyUpdateScreenArabic}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'التحديث اليومى',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
       {/* <Tab1Arabic.Screen
        name="GraphsScreenArabic"
        component={Tabs3Arabic}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'جداول ومنحنيات',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab1Arabic.Screen
        name="DashboardMiddleEastScreenArabic"
        component={Tabs2Arabic}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'لوحة البيانات',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab1Arabic.Screen
        name="NewsScreenArabic"
        component={NewsScreenArabic}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'أخبار',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab1Arabic.Screen
        name="SettingsScreenArabic"
        component={SettingsScreenArabic}
        initialParams={props.route.params.params}
        options={{
          tabBarLabel: 'الاعدادات',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

    </Tab1Arabic.Navigator>
  );
}


// English Dashboard tab Nav
const Tab2English = createMaterialTopTabNavigator();

function Tabs2English(props) {
  return (
    <Tab2English.Navigator
      initialRouteName="DashboardMiddleEastScreen"
      initialParams={props.route.params}
      swipeEnabled= {false}        
      tabBarOptions={{
        style: {
          marginBottom: 0,
          paddingBottom: 1,
        }
      }}
    >

      <Tab2English.Screen
        name="DashboardWorldScreen"
        component={DashboardWorldScreen}
        initialParams={props.route.params}        
        options={{
          tabBarLabel: 'World',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

      <Tab2English.Screen
        name="DashboardMiddleEastScreen"
        component={DashboardMiddleEastScreen}
        initialParams={props.route.params}        
        options={{
          tabBarLabel: 'Middle East',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab2English.Screen
        name="DashboardCountryScreen"
        component={DashboardCountryScreen}
        initialParams={props.route.params}        
        options={{
          tabBarLabel: 'Country',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      /> */}

    </Tab2English.Navigator>
  );
}


// Arabic Dashboard tab Nav
const Tab2Arabic = createMaterialTopTabNavigator();

function Tabs2Arabic(props) {
  return (
    <Tab2Arabic.Navigator
      initialRouteName="DashboardMiddleEastScreenArabic"
      initialParams={props.route.params}
      swipeEnabled= {false}                
      tabBarOptions={{
        style: {
          marginBottom: 0,
          paddingBottom: 1,
        }
      }}
    >

      <Tab2Arabic.Screen
        name="DashboardWorldScreenArabic"
        component={DashboardWorldScreenArabic}
        initialParams={props.route.params}        
        options={{
          tabBarLabel: 'العالم',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

      <Tab2Arabic.Screen
        name="DashboardMiddleEastScreenArabic"
        component={DashboardMiddleEastScreenArabic}
        initialParams={props.route.params}        
        options={{
          tabBarLabel: 'الشرق الأوسط',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab2Arabic.Screen
        name="DashboardCountryScreenArabic"
        component={DashboardCountryScreenArabic}
        initialParams={props.route.params}        
        options={{
          tabBarLabel: 'الدولة',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      /> */}

    </Tab2Arabic.Navigator>
  );
}


const Tab3 = createBottomTabNavigator();

function MyTabs3() {
  return (
    <Tab3.Navigator
      initialRouteName="GraphScreen1"
      tabBarOptions={{
        style: {
          marginBottom: 10,
          paddingBottom: 8,
        }
      }}
    >
      <Tab3.Screen
        name="GraphScreen1"
        component={GraphScreen1}
        options={{
          tabBarLabel: 'Total Cases',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      <Tab3.Screen
        name="GraphScreen2"
        component={GraphScreen2}
        options={{
          tabBarLabel: 'New Cases',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

      <Tab3.Screen
        name="GraphScreen3"
        component={GraphScreen3}
        options={{
          tabBarLabel: 'Total Deaths',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      <Tab3.Screen
        name="GraphScreen4"
        component={GraphScreen4}
        options={{
          tabBarLabel: 'New Deaths',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />


    </Tab3.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs/>
    </NavigationContainer>
  )
}
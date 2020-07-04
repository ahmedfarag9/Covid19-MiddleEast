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
      <Tab1.Screen
        name="DailyUpdateScreen"
        component={DailyUpdateScreen}
        options={{
          tabBarLabel: 'Daily Update',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      <Tab1.Screen
        name="GraphsScreen"
        component={MyTabs3}
        options={{
          tabBarLabel: 'Graphs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      <Tab1.Screen
        name="DashboardMiddleEastScreen"
        component={MyTabs2}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      <Tab1.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      <Tab1.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

    </Tab1.Navigator>
  );
}



const Tab2 = createBottomTabNavigator();

function MyTabs2() {
  return (
    <Tab2.Navigator
      initialRouteName="DashboardMiddleEastScreen"
      tabBarOptions={{
        style: {
          marginBottom: 10,
          paddingBottom: 8,
        }
      }}
    >

      <Tab2.Screen
        name="DashboardWorldScreen"
        component={DashboardWorldScreen}
        options={{
          tabBarLabel: 'World',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

      <Tab2.Screen
        name="DashboardMiddleEastScreenn"
        component={DashboardMiddleEastScreen}
        options={{
          tabBarLabel: 'Middle East',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
      <Tab2.Screen
        name="DashboardCountryScreen"
        component={DashboardCountryScreen}
        options={{
          tabBarLabel: 'Country',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />

    </Tab2.Navigator>
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
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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


const Tab1 = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab1.Navigator
      initialRouteName="DailyUpdateScreen"
      tabBarOptions={{
        style: {
          marginBottom: 10,
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
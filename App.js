import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DailyUpdateScreen from './screens/DailyUpdateScreen'
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
      <Tab.Screen
        name="DailyUpdateScreen"
        component={DailyUpdateScreen}
        options={{
          tabBarLabel: 'Daily Update',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />



    </Tab1.Navigator>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
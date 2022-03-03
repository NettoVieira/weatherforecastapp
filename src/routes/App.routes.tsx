import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ListCities } from '../screens/List';
import { useTheme } from 'styled-components';

const App = createNativeStackNavigator();

export function AppRoutes() {
  const { colors } = useTheme();

  return (
    <App.Navigator
    screenOptions={() => ({
      contentStyle: {backgroundColor: colors.background},
      headerShown: false,
    })}>
      <App.Screen 
        name="List"
        component={ListCities}
      />
      
    </App.Navigator>
  )
}
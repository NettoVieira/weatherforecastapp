import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { View } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Routes } from './routes';
import theme from './global/theme';
import AppLoading from 'expo-app-loading';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" translucent={false} backgroundColor={theme.colors.primary}/>
      
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

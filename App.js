import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './Context/AppContext'; 
import AppNavigation from './Navigation/AppNavigation'; 

export default function App() {
  return (
    <AppProvider> 
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </AppProvider>
  );
}
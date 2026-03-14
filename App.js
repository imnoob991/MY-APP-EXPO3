import React from 'react';
import { AppProvider } from './Context/AppContext';
import { AppNavigation } from './Navigation/AppNavigation';

export default function App() {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
}
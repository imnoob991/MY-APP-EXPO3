import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppContext } from '../Context/AppContext';
import SignInScreen from '../screens/SignInScreen';
import AccountScreen from '../screens/AccountScreen';
import ExplorerScreen from '../screens/ExplorerScreen'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator><Stack.Screen name="SignIn" component={SignInScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Explorer" component={ExplorerScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export const AppNavigation = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
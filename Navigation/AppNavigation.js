import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import BeveragesScreen from '../screens/BeveragesScreen';

const CartScreen = () => <></>;
const FavouriteScreen = () => <></>;
const AccountScreen = () => <></>;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#53B175', 
        tabBarInactiveTintColor: '#181725',
        tabBarStyle: { height: 70, paddingBottom: 10 },
      }}
    >
      <Tab.Screen 
        name="Shop" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => <Entypo name="shop" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen} 
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="search" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Favourite" 
        component={FavouriteScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// 2. Điều hướng tổng (Stack)
export default function AppNavigation() {
  return (
      <Stack.Navigator 
        initialRouteName="MainApp" 
        screenOptions={{ headerShown: false }}
      >
        
        <Stack.Screen name="MainApp" component={MainTabs} />
      
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
        
       
      </Stack.Navigator>
  );
}
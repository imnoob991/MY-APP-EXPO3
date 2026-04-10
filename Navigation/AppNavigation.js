import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';

// Import các màn hình
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';
import FilterScreen from '../screens/FilterScreen';
import OrderErrorScreen from '../screens/OrderErrorScreen';
import AccountScreen from '../screens/AccountScreen';
import BeveragesScreen from '../screens/BeveragesScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();

// 1. Tạo Stack riêng cho nhánh Explore để ẩn Beverages khỏi Tab Bar
function ExploreStackGroup() {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="ExploreMain" component={ExploreScreen} />
      <ExploreStack.Screen name="Beverages" component={BeveragesScreen} />
    </ExploreStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#181725',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Shop') iconName = 'storefront-outline';
          else if (route.name === 'Explore') iconName = 'search';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          else if (route.name === 'Favourite') iconName = 'heart-outline';
          else if (route.name === 'Account') iconName = 'person-outline';

          return route.name === 'Explore' ? 
            <Feather name="search" size={24} color={color} /> : 
            <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      
      {/* 2. Thay ExploreScreen bằng ExploreStackGroup */}
      <Tab.Screen name="Explore" component={ExploreStackGroup} />
      
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      
      {/* ĐÃ XÓA Tab.Screen Beverages ở đây để không bị thừa nút */}
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        
        <Stack.Screen 
          name="Filters" 
          component={FilterScreen} 
          options={{ 
            animation: 'slide_from_bottom',
            presentation: 'modal' 
          }} 
        />
        <Stack.Screen
          name="OrderError" 
          component={OrderErrorScreen} 
          options={{ 
            presentation: 'transparentModal',
            animation: 'fade',
          }} 
        />

        <Stack.Screen 
          name="OrderSuccess" 
          component={OrderSuccessScreen} 
          options={{ 
            animation: 'fade',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
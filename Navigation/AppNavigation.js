import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';

// --- IMPORT CÁC MÀN HÌNH ---
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from '../screens/SignInScreen';
import NumberScreen from '../screens/NumberScreen';
import VerificationScreen from '../screens/VerificationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// --- CẤU TRÚC TAB NAVIGATOR (GIAO DIỆN CHÍNH) ---
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#53B175', // Màu xanh Nectar
        tabBarInactiveTintColor: 'gray',
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
      {/* Bạn có thể thêm Tab Favourite hoặc Account tương tự ở đây */}
    </Tab.Navigator>
  );
}

// --- ĐIỀU HƯỚNG TỔNG (STACK NAVIGATOR) ---
export default function AppNavigation() {
  return (
    <Stack.Navigator 
      initialRouteName="Splash" 
      screenOptions={{ headerShown: false }}
    >
      {/* Luồng Auth (Theo ảnh thiết kế) */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Number" component={NumberScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />

      {/* Vào App chính sau khi Log In thành công */}
      <Stack.Screen name="MainApp" component={MainTabs} />
    </Stack.Navigator>
  );
}
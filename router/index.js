import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Thư viện icon của Expo

import { AppContext } from '../Context/AppContext';

// --- IMPORT CÁC MÀN HÌNH ---
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ExplorerScreen from '../screens/ExplorerScreen';
import AccountScreen from '../screens/AccountScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 1. CỤM AUTH STACK (Khi chưa đăng nhập)
const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

// 2. CỤM BOTTOM TAB (Nằm trong Main Stack)
const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = route.name === 'Explorer' ? 'restaurant' : 'person';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Explorer" component={ExplorerScreen} options={{ title: 'Khám phá' }} />
    <Tab.Screen name="Account" component={AccountScreen} options={{ title: 'Tài khoản' }} />
  </Tab.Navigator>
);

// 3. CỤM MAIN STACK (Khi đã đăng nhập)
const MainStackNavigator = () => (
  <Stack.Navigator>
    {/* Màn hình chính của MainStack là cái Bottom Tab */}
    <Stack.Screen 
      name="MainTab" 
      component={MainTabNavigator} 
      options={{ headerShown: false }} 
    />
    {/* Các màn hình chi tiết sẽ đè lên trên Bottom Tab */}
    <Stack.Screen name="FoodDetail" component={FoodDetailScreen} options={{ title: 'Chi tiết món ăn' }} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Chỉnh sửa hồ sơ' }} />
  </Stack.Navigator>
);

// 4. ROOT ROUTER (Xuất ra để App.js dùng)
export default function AppRouter() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {/* Nếu isLoggedIn = true thì hiện Main, ngược lại hiện Auth */}
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';

// Import các màn hình từ thư mục screens
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
// Giả định bạn có các file này, nếu chưa có hãy tạo file trống để tránh lỗi
const AccountScreen = () => <></>; 
import FilterScreen from '../screens/FilterScreen'; // Bạn cần tạo file này cho ảnh số 2

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 1. Định nghĩa bộ khung Tab Bottom
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
        tabBarIcon: ({ color, size, focused }) => {
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
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

// 2. Định nghĩa Stack chính (Chứa Tabs và các màn hình phụ)
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Màn hình chính là các Tabs */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        
        {/* Các màn hình phụ không hiện Tab Bar (như Filters) */}
        <Stack.Screen 
          name="Filters" 
          component={FilterScreen} 
          options={{ 
            animation: 'slide_from_bottom', // Hiệu ứng mở từ dưới lên như ảnh
            presentation: 'modal' 
          }} 
        />
        
        {/* Bạn có thể thêm ProductDetailScreen ở đây nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
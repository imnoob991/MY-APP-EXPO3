import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  SafeAreaView, KeyboardAvoidingView, Platform, Alert, AppState
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Chào mừng tới Home!</Text>
    </View>
  );
}


function SignInScreen({ navigation }) { 
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [appStateVisible, setAppStateVisible] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setAppStateVisible(nextAppState);
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (phone.length > 0) setIsValid(isPhoneValid(phone));
  }, [phone]);

  const isPhoneValid = (number) => {
    const cleaned = number.replace(/\s/g, '');
    return /^0\d{9}$/.test(cleaned);
  };

  const formatPhoneNumber = (text) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = cleaned;
    if (cleaned.length > 4 && cleaned.length <= 7) {
      formatted = `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    } else if (cleaned.length > 7) {
      formatted = `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 10)}`;
    }
    return formatted;
  };

  const onPress = () => {
    if (isPhoneValid(phone)) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không đúng định dạng. Vui lòng nhập lại');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inner}>
        <View style={styles.header}><Text style={styles.headerTitle}>Đăng nhập</Text></View>
        <View style={styles.content}>
          <Text style={styles.title}>Nhập số điện thoại</Text>
          <Text style={styles.subtitle}>Dùng số điện thoại để đăng nhập tài khoản OneHousing Pro</Text>
          <TextInput
            style={[styles.input, !isValid ? { borderBottomColor: 'red' } : null]}
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="numeric"
            value={phone}
            onChangeText={(t) => setPhone(formatPhoneNumber(t))}
            maxLength={12}
          />
          {!isValid && <Text style={{ color: 'red', marginTop: 5 }}>Số điện thoại không đúng định dạng</Text>}
        </View>
        <TouchableOpacity 
          style={[styles.button, (phone.length < 10) ? { backgroundColor: '#CCC' } : null]} 
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn"> 
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Trang chủ' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, paddingHorizontal: 20 },
  header: { height: 60, justifyContent: 'center', marginBottom: 40 },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  content: { flex: 1 },
  title: { fontSize: 20, fontWeight: '500', marginBottom: 15 },
  subtitle: { fontSize: 16, color: '#333', marginBottom: 30 },
  input: { fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#E0E0E0', paddingVertical: 10 },
  button: { backgroundColor: '#0000FF', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import Colors from '../constants/Colors';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Tự động chuyển sang Onboarding sau 2 giây
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image 
        source={require('../assets/logo_white.png')} 
        style={styles.logo} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#53B175', // Màu xanh Nectar
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  logo: { width: 190, height: 70, resizeMode: 'contain' }
});

export default SplashScreen;
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext';

const SignInScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Sign In Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(true)}>
        <Text style={{color: '#fff'}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 10 }
});
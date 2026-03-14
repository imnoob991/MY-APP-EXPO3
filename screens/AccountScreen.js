import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext';

const AccountScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  return (
    <View style={styles.center}>
      <Text style={styles.title}>My Account</Text>
      <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(false)}>
        <Text style={{color: '#fff'}}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: 'orange', padding: 15, borderRadius: 10 }
});
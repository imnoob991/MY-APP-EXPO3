import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NumberScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.label}>Mobile Number</Text>
      
      <View style={styles.inputRow}>
        <Image source={require('../assets/flag.png')} style={styles.flag} />
        <Text style={styles.code}>+880</Text>
        <TextInput style={styles.input} keyboardType="numeric" autoFocus />
      </View>

      <TouchableOpacity 
        style={styles.nextBtn}
        onPress={() => navigation.navigate('Verification')}
      >
        <FontAwesome name="chevron-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 25, paddingTop: 60 },
  title: { fontSize: 26, fontWeight: 'bold', marginTop: 40 },
  label: { color: '#7C7C7C', marginTop: 30, fontSize: 16 },
  inputRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingVertical: 10 },
  flag: { width: 30, height: 20, marginRight: 10 },
  code: { fontSize: 18, marginRight: 10 },
  input: { flex: 1, fontSize: 18 },
  nextBtn: { 
    position: 'absolute', right: 25, bottom: 50, 
    backgroundColor: '#53B175', width: 60, height: 60, 
    borderRadius: 30, justifyContent: 'center', alignItems: 'center' 
  }
});

export default NumberScreen;
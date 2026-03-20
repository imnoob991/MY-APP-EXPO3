import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const CustomTextInput = ({ label, ...props }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 15, width: '100%' },
  label: { fontWeight: 'bold', marginBottom: 5, color: '#555' },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    padding: 10, 
    backgroundColor: '#fff' 
  },
});

export default CustomTextInput; // Export Default
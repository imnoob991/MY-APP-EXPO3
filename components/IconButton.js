import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const IconButton = ({ title, iconName, color }) => (
  <TouchableOpacity style={[styles.button, { borderColor: color }]}>
    <FontAwesome name={iconName} size={20} color={color} />
    <Text style={[styles.text, { color: color }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  text: { marginLeft: 10, fontWeight: 'bold' },
});

export default IconButton; // Export Default
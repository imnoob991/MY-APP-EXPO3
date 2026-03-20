import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SectionHeader = ({ title, rightText }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}>{title}</Text>
    {rightText && (
      <TouchableOpacity>
        <Text style={styles.rightText}>{rightText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  rightText: { color: 'orange', fontWeight: '500' },
});

export default SectionHeader;
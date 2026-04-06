import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Checkbox = ({ label, isSelected }) => (
  <View style={styles.checkboxContainer}>
    <View style={[styles.checkbox, isSelected && styles.checked]}>
      {isSelected && <Ionicons name="checkmark" size={16} color="white" />}
    </View>
    <Text style={[styles.label, isSelected && { color: '#53B175' }]}>{label}</Text>
  </View>
);

export default function FilterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="close" size={28} /></TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Checkbox label="Eggs" isSelected={true} />
        <Checkbox label="Noodles & Pasta" />
        <Checkbox label="Chips & Crisps" />
        <Checkbox label="Fast Food" />

        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Brand</Text>
        <Checkbox label="Individual Collection" />
        <Checkbox label="Cocola" isSelected={true} />
        <Checkbox label="Ifad" />
        <Checkbox label="Kazi Farmas" />
      </View>

      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyText}>Apply Filter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F3F2' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: 'white' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  content: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 15 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkbox: { width: 22, height: 22, borderRadius: 7, borderWidth: 1.5, borderColor: '#B1B1B1', marginRight: 12, justifyContent: 'center', alignItems: 'center' },
  checked: { backgroundColor: '#53B175', borderColor: '#53B175' },
  label: { fontSize: 16, color: '#181725' },
  applyBtn: { backgroundColor: '#53B175', margin: 20, padding: 20, borderRadius: 15, alignItems: 'center' },
  applyText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});
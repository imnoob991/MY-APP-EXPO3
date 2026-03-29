import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const BeveragesScreen = ({ navigation }) => {
  const items = [
    { id: '1', name: 'Diet Coke', unit: '355ml, Price', price: '$1.99', img: require('../assets/coke.png') },
    { id: '2', name: 'Sprite Can', unit: '325ml, Price', price: '$1.50', img: require('../assets/sprite.png') },
    { id: '3', name: 'Apple & Grape Juice', unit: '2L, Price', price: '$15.99', img: require('../assets/juice.png') },
    { id: '4', name: 'Orange Juice', unit: '2L, Price', price: '$15.99', img: require('../assets/orange_juice.png') },
    { id: '5', name: 'Coca Cola Can', unit: '325ml, Price', price: '$4.99', img: require('../assets/coca.png') },
    { id: '6', name: 'Pepsi Can', unit: '320ml, Price', price: '$4.99', img: require('../assets/pepsi.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Feather name="chevron-left" size={24} /></TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <Feather name="sliders" size={24} />
      </View>

      <FlatList
        data={items}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={item.img} style={styles.itemImg} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemUnit}>{item.unit}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addBtn}><Entypo name="plus" size={20} color="white" /></TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, marginBottom: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  itemCard: { flex: 1, padding: 15, margin: 8, borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E2' },
  itemImg: { width: 80, height: 100, alignSelf: 'center', resizeMode: 'contain' },
  itemName: { fontWeight: 'bold', fontSize: 16, marginTop: 10 },
  itemUnit: { color: '#7C7C7C', fontSize: 14 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
  price: { fontSize: 18, fontWeight: 'bold' },
  addBtn: { backgroundColor: '#53B175', padding: 10, borderRadius: 15 }
});

export default BeveragesScreen;
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const FAV_DATA = [
  { id: '1', title: 'Sprite Can', price: '$1.50', weight: '325ml, Price', img: require('../assets/sprite.png') },
  { id: '2', title: 'Diet Coke', price: '$1.99', weight: '355ml, Price', img: require('../assets/coke.png') },
  { id: '3', title: 'Apple & Grape Juice', price: '$15.50', weight: '2L, Price', img: require('../assets/juice.png') },
  { id: '4', title: 'Coca Cola Can', price: '$4.99', weight: '325ml, Price', img: require('../assets/coca.png') },
  { id: '5', title: 'Pepsi Can', price: '$4.99', weight: '330ml, Price', img: require('../assets/pepsi.png') },
];

export default function FavouriteScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.header}>Favorurite</Text>
      
      <View style={styles.container}>
        <FlatList
          data={FAV_DATA}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.favItem}>
              <Image source={item.img} style={styles.img} />
              <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.weight}>{item.weight}</Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.price}>{item.price}</Text>
                <Entypo name="chevron-thin-right" size={18} color="black" style={{ marginLeft: 10 }} />
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 0 }}
        />

        <View style={styles.footer}>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>Add All To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingVertical: 15, borderBottomWidth: 0.5, borderColor: '#E2E2E2' },
  container: { flex: 1 },
  favItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 0.5, borderColor: '#E2E2E2' },
  img: { width: 45, height: 45, resizeMode: 'contain' },
  info: { flex: 1, marginLeft: 20 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  weight: { color: '#7C7C7C', fontSize: 13 },
  right: { flexDirection: 'row', alignItems: 'center' },
  price: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  footer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 90 },
  addBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  addText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});
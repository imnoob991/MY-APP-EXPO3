import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const CART_DATA = [
  { id: '1', title: 'Bell Pepper Red', weight: '1kg, Price', price: '$4.99', img: require('../assets/bell_pepper.png') },
  { id: '2', title: 'Egg Chicken Red', weight: '4pcs, Price', price: '$1.99', img: require('../assets/egg_red.png') },
  { id: '3', title: 'Organic Bananas', weight: '12kg, Price', price: '$3.00', img: require('../assets/banana.png') },
  { id: '4', title: 'Ginger', weight: '250gm, Price', price: '$2.99', img: require('../assets/ginger.png') },
];

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.header}>My Cart</Text>
      
      <View style={styles.container}>
        <FlatList
          data={CART_DATA}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.img} style={styles.img} />
              <View style={styles.info}>
                <View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity><Ionicons name="close" size={24} color="#7C7C7C" /></TouchableOpacity>
                </View>
                <Text style={styles.weight}>{item.weight}</Text>
                <View style={[styles.row, { marginTop: 12 }]}>
                  <View style={styles.qtyContainer}>
                    <TouchableOpacity style={styles.qtyBtn}><AntDesign name="minus" size={16} color="#B1B1B1" /></TouchableOpacity>
                    <Text style={styles.qtyText}>1</Text>
                    <TouchableOpacity style={[styles.qtyBtn, { borderColor: '#53B175' }]}><AntDesign name="plus" size={16} color="#53B175" /></TouchableOpacity>
                  </View>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
          // Quan trọng: Để 0 để danh sách chạm sát phần footer bên dưới
          contentContainerStyle={{ paddingBottom: 0 }} 
        />

        <View style={styles.footer}>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Go to Checkout</Text>
            <View style={styles.badge}><Text style={styles.badgeText}>$12.96</Text></View>
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
  cartItem: { flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 0.5, borderColor: '#E2E2E2', alignItems: 'center' },
  img: { width: 70, height: 70, resizeMode: 'contain' },
  info: { flex: 1, marginLeft: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  weight: { color: '#7C7C7C', fontSize: 13 },
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 35, height: 35, borderRadius: 12, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center' },
  qtyText: { marginHorizontal: 12, fontWeight: 'bold', fontSize: 16 },
  price: { fontSize: 16, fontWeight: 'bold' },
  
  footer: {
    paddingHorizontal: 20,
    paddingTop: 10, // Giảm khoảng cách này để nút sát danh sách hơn
    paddingBottom: 90, // Để nút nổi lên trên thanh TabBar
    backgroundColor: 'white',
  },
  checkoutBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  checkoutText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  badge: { position: 'absolute', right: 20, backgroundColor: '#489E67', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 5 },
  badgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' }
});
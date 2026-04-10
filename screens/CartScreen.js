import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar, Modal, Pressable } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const CART_DATA = [
  { id: '1', title: 'Bell Pepper Red', weight: '1kg, Price', price: '$4.99', img: require('../assets/bell_pepper.png') },
  { id: '2', title: 'Egg Chicken Red', weight: '4pcs, Price', price: '$1.99', img: require('../assets/egg_red.png') },
  { id: '3', title: 'Organic Bananas', weight: '12kg, Price', price: '$3.00', img: require('../assets/banana.png') },
  { id: '4', title: 'Ginger', weight: '250gm, Price', price: '$2.99', img: require('../assets/ginger.png') },
];

// Nhận navigation từ Stack để chuyển màn hình
export default function CartScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header cố định */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Cart</Text>
      </View>
      
      {/* Danh sách sản phẩm */}
      <View style={{ flex: 1 }}>
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
          contentContainerStyle={{ paddingBottom: 20 }} 
        />
      </View>

      {/* Footer chứa nút Checkout */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => setModalVisible(true)}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>$12.96</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal Checkout */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable style={{ flex: 1 }} onPress={() => setModalVisible(false)} />
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Checkout</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <CheckoutRow label="Delivery" value="Select Method" />
            <CheckoutRow label="Payment" isIcon={true} />
            <CheckoutRow label="Promo Code" value="Pick discount" />
            <CheckoutRow label="Total Cost" value="$13.97" />

            <Text style={styles.termsText}>
              By placing an order you agree to our 
              <Text style={{ fontWeight: 'bold', color: '#181725' }}> Terms</Text> And <Text style={{ fontWeight: 'bold', color: '#181725' }}>Conditions</Text>
            </Text>

            {/* NÚT PLACE ORDER: Đóng modal và chuyển màn hình */}
            <TouchableOpacity 
              style={styles.placeOrderBtn}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('OrderSuccess');
              }}
            >
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const CheckoutRow = ({ label, value, isIcon }) => (
  <TouchableOpacity style={styles.rowItem}>
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={styles.rowRight}>
      {isIcon ? (
        <Image source={{uri: 'https://img.icons8.com/color/48/mastercard.png'}} style={{width: 24, height: 15, marginRight: 10}} />
      ) : (
        <Text style={styles.rowValue}>{value}</Text>
      )}
      <Ionicons name="chevron-forward" size={18} color="black" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  headerContainer: { borderBottomWidth: 0.5, borderColor: '#E2E2E2', backgroundColor: 'white' },
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingVertical: 15 },
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
    paddingTop: 15,
    paddingBottom: 20, 
    backgroundColor: 'white',
    // Khoảng cách này để né thanh TabBar
    marginBottom: Platform.OS === 'ios' ? 90 : 80, 
    borderTopWidth: 0.5,
    borderColor: '#F2F2F2',
  },
  checkoutBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  checkoutText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  badge: { position: 'absolute', right: 20, backgroundColor: '#489E67', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  badgeText: { color: 'white', fontSize: 14, fontWeight: 'bold' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25, paddingBottom: 40 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottomWidth: 0.5, borderColor: '#E2E2E2', paddingBottom: 15 },
  modalTitle: { fontSize: 20, fontWeight: 'bold' },
  rowItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 0.5, borderColor: '#E2E2E2' },
  rowLabel: { fontSize: 16, color: '#7C7C7C', fontWeight: '500' },
  rowRight: { flexDirection: 'row', alignItems: 'center' },
  rowValue: { fontSize: 16, fontWeight: '600', marginRight: 10 },
  termsText: { fontSize: 13, color: '#7C7C7C', marginTop: 20, lineHeight: 20 },
  placeOrderBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginTop: 25 },
  placeOrderText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});
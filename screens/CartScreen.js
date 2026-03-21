import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppContext } from '../Context/AppContext';

const CartScreen = () => {
  const { cart } = useContext(AppContext);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>₹ {item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity><Text style={styles.qBtn}>-</Text></TouchableOpacity>
        <Text style={styles.qText}>1</Text>
        <TouchableOpacity><Text style={styles.qBtn}>+</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <FontAwesome5 name="chevron-left" size={20} color="#FF7F50" />
      </TouchableOpacity>

      <Text style={styles.title}>Your Cart 👍</Text>

      <FlatList 
        data={cart} 
        renderItem={renderItem} 
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>Giỏ hàng đang trống</Text>}
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>₹ {cart.reduce((sum, item) => sum + item.price, 0)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: '#fff' },
  backBtn: { marginTop: 30, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25 },
  cartItem: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FB', 
    padding: 15, borderRadius: 20, marginBottom: 15 
  },
  itemImage: { width: 60, height: 60, borderRadius: 12 },
  itemInfo: { flex: 1, marginLeft: 15 },
  itemName: { fontWeight: 'bold', fontSize: 16 },
  itemPrice: { color: '#FF7F50', fontWeight: 'bold', marginTop: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  qBtn: { fontSize: 18, paddingHorizontal: 10, color: '#ccc' },
  qText: { fontSize: 16, fontWeight: 'bold' },
  footer: { marginTop: 20 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  totalLabel: { fontSize: 18, color: '#888' },
  totalPrice: { fontSize: 22, fontWeight: 'bold' },
  checkoutBtn: { backgroundColor: '#FF7F50', padding: 20, borderRadius: 20, alignItems: 'center' },
  checkoutText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#999' }
});

export default CartScreen;
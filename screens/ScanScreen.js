import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppContext } from '../Context/AppContext';

const ScanScreen = () => {
  const { addToCart } = useContext(AppContext);

  const product = {
    id: '1',
    name: "Lauren's Orange Juice",
    price: 149,
    image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Juice'
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <FontAwesome5 name="chevron-left" size={20} color="#5C6BC0" />
      </TouchableOpacity>

      <View style={styles.scanFrame}>
         {/* Giả lập camera quét chai nước */}
         <Image 
          source={{ uri: 'https://via.placeholder.com/300x400/E0E0E0/808080?text=Scanning...' }} 
          style={styles.cameraMock} 
         />
         <View style={styles.cornerTopLeft} />
         <View style={styles.cornerTopRight} />
         <View style={styles.cornerBottomLeft} />
         <View style={styles.cornerBottomRight} />
      </View>

      <View style={styles.productCard}>
        <Image source={{ uri: product.image }} style={styles.productImg} />
        <View style={styles.productInfo}>
          <Text style={styles.brandText}>Lauren's</Text>
          <Text style={styles.nameText}>{product.name}</Text>
        </View>
        <TouchableOpacity 
          style={styles.addBtn} 
          onPress={() => {
            addToCart(product);
            alert('Đã thêm vào giỏ hàng!');
          }}
        >
          <FontAwesome5 name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EBEDF4', alignItems: 'center' },
  backBtn: { position: 'absolute', top: 50, left: 20, backgroundColor: '#fff', padding: 12, borderRadius: 12 },
  scanFrame: { width: '80%', height: '55%', marginTop: 120, position: 'relative' },
  cameraMock: { width: '100%', height: '100%', borderRadius: 20 },
  productCard: { 
    flexDirection: 'row', backgroundColor: '#fff', width: '90%', 
    padding: 15, borderRadius: 20, alignItems: 'center', position: 'absolute', bottom: 30 
  },
  productImg: { width: 50, height: 50, borderRadius: 10 },
  productInfo: { flex: 1, marginLeft: 15 },
  brandText: { color: '#888', fontSize: 12 },
  nameText: { fontWeight: 'bold', fontSize: 16 },
  addBtn: { backgroundColor: '#5C6BC0', padding: 15, borderRadius: 15 },
  // Các góc của khung quét
  cornerTopLeft: { position: 'absolute', top: 20, left: 20, width: 40, height: 40, borderTopWidth: 4, borderLeftWidth: 4, borderColor: '#fff' },
  cornerTopRight: { position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderTopWidth: 4, borderRightWidth: 4, borderColor: '#fff' },
  cornerBottomLeft: { position: 'absolute', bottom: 20, left: 20, width: 40, height: 40, borderBottomWidth: 4, borderLeftWidth: 4, borderColor: '#fff' },
  cornerBottomRight: { position: 'absolute', bottom: 20, right: 20, width: 40, height: 40, borderBottomWidth: 4, borderRightWidth: 4, borderColor: '#fff' },
});

export default ScanScreen;
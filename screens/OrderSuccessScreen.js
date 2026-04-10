import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function OrderSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Hình ảnh minh họa (Bạn thay link hoặc dùng file local của bạn) */}
        <Image 
          source={require('../assets/order_success.png')} 
          style={styles.image}
        />

        <Text style={styles.title}>Your Order has been accepted</Text>
        <Text style={styles.subTitle}>
          Your items has been placed and is on its way to being processed
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.trackBtn}>
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backBtn} 
          onPress={() => navigation.navigate('Home')} // Chuyển về trang chủ
        >
          <Text style={styles.backText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  image: { width: 250, height: 250, resizeMode: 'contain', marginBottom: 40 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#181725', marginBottom: 15 },
  subTitle: { fontSize: 16, textAlign: 'center', color: '#7C7C7C', lineHeight: 22 },
  footer: { padding: 20, paddingBottom: 50 },
  trackBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  trackText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  backBtn: { height: 50, justifyContent: 'center', alignItems: 'center' },
  backText: { color: '#181725', fontWeight: 'bold', fontSize: 18 },
});
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FoodDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Màn hình chi tiết món ăn</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: 'orange', marginTop: 20 }}>Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' }
});

export default FoodDetailScreen; // Bắt buộc phải có dòng này
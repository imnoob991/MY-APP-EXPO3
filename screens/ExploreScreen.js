import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', title: 'Frash Fruits & Vegetable', color: 'rgba(83, 177, 117, 0.1)', border: '#53B175', img: require('../assets/cat_fruits.png') },
  { id: '2', title: 'Cooking Oil & Ghee', color: 'rgba(248, 164, 76, 0.1)', border: '#F8A44C', img: require('../assets/cat_oil.png') },
  { id: '3', title: 'Meat & Fish', color: 'rgba(247, 165, 147, 0.1)', border: '#F7A593', img: require('../assets/cat_meat.png') },
  { id: '4', title: 'Bakery & Snacks', color: 'rgba(211, 176, 224, 0.1)', border: '#D3B0E0', img: require('../assets/cat_bakery.png') },
  { id: '5', title: 'Dairy & Eggs', color: 'rgba(253, 229, 152, 0.1)', border: '#FDE598', img: require('../assets/cat_dairy.png') },
  { id: '6', title: 'Beverages', color: 'rgba(183, 223, 245, 0.1)', border: '#B7DFF5', img: require('../assets/cat_beverages.png') },
];

const eggProducts = [
  { id: 'e1', title: 'Egg Chicken Red', price: '$1.99', unit: '4pcs, Price', img: require('../assets/egg_red.png') },
  { id: 'e2', title: 'Egg Chicken White', price: '$1.50', unit: '180g, Price', img: require('../assets/egg_white.png') },
  { id: 'e3', title: 'Egg Pasta', price: '$15.99', unit: '30gm, Price', img: require('../assets/egg_pasta.png') },
  { id: 'e4', title: 'Egg Noodles', price: '$15.99', unit: '2L, Price', img: require('../assets/egg_noodles.png') },
  { id: 'e5', title: 'Mayonnais Eggless', price: '$4.99', unit: '150g, Price', img: require('../assets/mayo.png') },
  { id: 'e6', title: 'Egg Noodles', price: '$15.99', unit: '2L, Price', img: require('../assets/egg_noodles2.png') },
];

export default function ExploreScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const isSearchingEgg = searchQuery.toLowerCase() === 'egg';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {!isSearchingEgg && <Text style={styles.headerTitle}>Find Products</Text>}
        
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Feather name="search" size={20} color="black" />
            <TextInput 
              style={styles.input} 
              placeholder="Search Store" 
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {isSearchingEgg && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={18} color="#7C7C7C" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
            <Ionicons name="options-outline" size={26} color="black" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={isSearchingEgg ? eggProducts : categories}
          numColumns={2}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            isSearchingEgg ? (
              <View style={styles.productCard}>
                <Image source={item.img} style={styles.productImg} />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productUnit}>{item.unit}</Text>
                <View style={styles.productFooter}>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addBtn}><Text style={styles.addText}>+</Text></TouchableOpacity>
                </View>
              </View>
            ) : (
              <TouchableOpacity 
                style={[styles.catCard, { backgroundColor: item.color, borderColor: item.border }]}
                onPress={() => navigation.navigate('Beverages')}
              >
                <Image source={item.img} style={styles.catImg} />
                <Text style={styles.catText}>{item.title}</Text>
              </TouchableOpacity>
            )
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  container: { flex: 1, paddingHorizontal: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  searchRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  searchBox: { flex: 1, flexDirection: 'row', backgroundColor: '#F2F3F2', borderRadius: 15, padding: 12, alignItems: 'center' },
  input: { flex: 1, marginLeft: 10, fontSize: 16, fontWeight: '600' },
  catCard: { flex: 1, height: 190, margin: 8, borderRadius: 18, borderWidth: 1, padding: 15, justifyContent: 'center', alignItems: 'center' },
  catImg: { width: 100, height: 80, resizeMode: 'contain' },
  catText: { textAlign: 'center', fontWeight: 'bold', marginTop: 15, fontSize: 16 },
  productCard: { flex: 1, margin: 8, padding: 15, borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E2' },
  productImg: { width: '100%', height: 80, resizeMode: 'contain' },
  productTitle: { fontWeight: 'bold', fontSize: 14, marginTop: 10 },
  productUnit: { color: '#7C7C7C', fontSize: 12, marginVertical: 5 },
  productFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productPrice: { fontWeight: 'bold', fontSize: 16 },
  addBtn: { backgroundColor: '#53B175', width: 35, height: 35, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  addText: { color: 'white', fontSize: 20 }
});
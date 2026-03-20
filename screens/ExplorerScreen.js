import React from 'react';
import { StyleSheet, View, TextInput, FlatList, ScrollView, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SectionHeader from '../components/SectionHeader';

// Dữ liệu mẫu
const CATEGORIES = [
  { id: '1', name: 'Pizza', img: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg' },
  { id: '2', name: 'Burgers', img: 'https://images.unidays.world/i/self-serve/content/burgerking_app_tile/c600f95b-0618-4770-bc04-802778643350' },
  { id: '3', name: 'Steak', img: 'https://i.redd.it/6s6v873n7v751.jpg' },
];

const FOOD_ITEMS = [
  { id: '1', name: 'Food 1', author: 'By Viet Nam', price: '1$', img: 'https://vcdn-du-lich.vnecdn.net/2022/03/14/banh-mi-8902-1647250462.jpg' },
  { id: '2', name: 'Food 2', author: 'By Viet Nam', price: '3$', img: 'https://vcdn1-dulich.vnecdn.net/2022/06/01/Banh-mi-Thit-Nuong-Vietnam-7333-1654060000.jpg' },
];

const ExplorerScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* 1. Group: Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.locationIcon}>
          <Ionicons name="location-outline" size={24} color="black" />
        </View>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search for meals or area" 
        />
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
      </View>

      {/* 2. Group: Top Categories */}
      <SectionHeader title="Top Categories" rightText="Filter" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingLeft: 15 }}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Image source={{ uri: item.img }} style={styles.categoryImg} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />

      {/* 3. Group: Popular Items */}
      <SectionHeader title="Popular Items" rightText="View all" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={FOOD_ITEMS}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingLeft: 15 }}
        renderItem={({ item }) => (
          <View style={styles.foodCard}>
            <Image source={{ uri: item.img }} style={styles.foodImg} />
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodAuthor}>{item.author}</Text>
            <Text style={styles.foodPrice}>{item.price}</Text>
          </View>
        )}
      />

      {/* 4. Group: Sale-off Items */}
      <SectionHeader title="Sale-off Items" rightText="View all" />
      <View style={styles.saleSection}>
         {/* Tái sử dụng giao diện Popular hoặc tùy biến có thêm tag % giảm giá */}
         <Image 
            source={{ uri: 'https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-1_1630132333.jpg' }} 
            style={styles.saleImg} 
         />
         <View style={styles.saleTag}><Text style={styles.saleText}>10% OFF</Text></View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchSection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: 15, 
    backgroundColor: '#F5F5F5', 
    borderRadius: 10, 
    paddingHorizontal: 10 
  },
  searchInput: { flex: 1, padding: 12, fontSize: 14 },
  searchIcon: { paddingRight: 10 },
  
  categoryCard: { marginRight: 15, alignItems: 'center' },
  categoryImg: { width: 100, height: 70, borderRadius: 10 },
  categoryText: { marginTop: 5, color: 'gray' },

  foodCard: { marginRight: 15, width: 150 },
  foodImg: { width: 150, height: 100, borderRadius: 10 },
  foodName: { fontWeight: 'bold', marginTop: 5 },
  foodAuthor: { color: 'gray', fontSize: 12 },
  foodPrice: { fontWeight: 'bold' },

  saleSection: { marginHorizontal: 15, marginBottom: 30 },
  saleImg: { width: '100%', height: 150, borderRadius: 10 },
  saleTag: { position: 'absolute', top: 10, right: 10, backgroundColor: 'red', padding: 5, borderRadius: 5 },
  saleText: { color: '#fff', fontSize: 10, fontWeight: 'bold' }
});

export default ExplorerScreen;
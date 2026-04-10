import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ExploreScreen = ({ navigation }) => {
  const categories = [
    { id: '1', title: 'Frash Fruits & Vegetable', color: 'rgba(83, 177, 117, 0.1)', border: '#53B175', img: require('../assets/cat_fruits.png') },
    { id: '2', title: 'Cooking Oil & Ghee', color: 'rgba(248, 164, 76, 0.1)', border: '#F8A44C', img: require('../assets/cat_oil.png') },
    { id: '3', title: 'Meat & Fish', color: 'rgba(247, 165, 147, 0.1)', border: '#F7A593', img: require('../assets/cat_meat.png') },
    { id: '4', title: 'Bakery & Snacks', color: 'rgba(211, 176, 224, 0.1)', border: '#D3B0E0', img: require('../assets/cat_bakery.png') },
    { id: '5', title: 'Dairy & Eggs', color: 'rgba(253, 229, 152, 0.1)', border: '#FDE598', img: require('../assets/cat_dairy.png') },
    { id: '6', title: 'Beverages', color: 'rgba(183, 223, 245, 0.1)', border: '#B7DFF5', img: require('../assets/cat_beverages.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Find Products</Text>
      
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search Store" />
      </View>

      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: item.color, borderColor: item.border }]}
            onPress={() => navigation.navigate('Beverages')}
          >
            <Image source={item.img} style={styles.cardImg} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 },
  searchContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#F2F3F2', 
    padding: 15, 
    borderRadius: 15, 
    marginVertical: 20,
    alignItems: 'center'
  },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 16 },
  card: { flex: 1, height: 190, margin: 8, borderRadius: 18, borderWidth: 1, padding: 15, justifyContent: 'center', alignItems: 'center' },
  cardImg: { width: 100, height: 80, resizeMode: 'contain' },
  cardText: { textAlign: 'center', fontWeight: 'bold', marginTop: 15, fontSize: 16 }
});

export default ExploreScreen;
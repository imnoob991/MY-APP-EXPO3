import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TextInput, 
  FlatList,
  TouchableOpacity 
} from 'react-native';


const DATA = [
  { id: '1', title: 'Pizza', image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg', price: '1$' },
  { id: '2', title: 'Burgers', image: 'https://png.pngtree.com/png-vector/20240829/ourmid/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png', price: '3$' },
  { id: '3', title: 'Steak', image: 'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-steak-food-illustration-png-image_6703917.png', price: '5$' },
];

const ExplorerScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search for meals or area" 
        />
      </View>

      {/* Danh mục hàng đầu */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity><Text style={styles.filterText}>Filter</Text></TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Món ăn phổ biến */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity><Text style={styles.viewAllText}>View all</Text></TouchableOpacity>
        </View>
       
        <View style={styles.popularCard}>
           <Image 
             source={{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vietnamese_Pho.jpg/1280px-Vietnamese_Pho.jpg' }} 
             style={styles.popularImage} 
           />
           <View style={styles.popularInfo}>
              <Text style={styles.foodName}>Food 1</Text>
              <Text style={styles.foodAuthor}>By Viet Nam</Text>
              <Text style={styles.foodPrice}>1$</Text>
           </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExplorerScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchContainer: { padding: 15 },
  searchInput: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  section: { marginBottom: 25, paddingHorizontal: 15 },
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 15 
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  filterText: { color: 'orange' },
  viewAllText: { color: 'orange' },
  
  // Styles cho Card nằm ngang
  card: { marginRight: 15, width: 120 },
  cardImage: { width: 120, height: 80, borderRadius: 10 },
  cardTitle: { marginTop: 5, fontWeight: '500' },
  cardPrice: { color: 'gray' },

  // Styles cho Popular Items (nằm dọc)
  popularCard: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 15 },
  popularImage: { width: 100, height: 100, borderRadius: 10 },
  popularInfo: { marginLeft: 15, justifyContent: 'center' },
  foodName: { fontSize: 16, fontWeight: 'bold' },
  foodAuthor: { color: 'gray', marginVertical: 4 },
  foodPrice: { fontWeight: 'bold' }
});
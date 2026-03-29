import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 1. HEADER: Logo & Location */}
      <View style={styles.header}>
        <Image source={require('../assets/carrot_orange.png')} style={styles.logo} />
        <View style={styles.locationRow}>
          <Entypo name="location-pin" size={18} color="#4C4C4C" />
          <Text style={styles.locationText}>Dhaka, Banasree</Text>
        </View>
      </View>

      {/* 2. SEARCH BAR */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search Store" />
      </View>

      {/* 3. BANNER KHUYẾN MÃI */}
      <Image source={require('../assets/banner.png')} style={styles.banner} />

      {/* 4. EXCLUSIVE OFFER */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
        <View style={styles.productCard}>
          <Image source={require('../assets/banana.png')} style={styles.productImg} />
          <Text style={styles.productName}>Organic Bananas</Text>
          <Text style={styles.productUnit}>7pcs, Priceg</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity 
              style={styles.addBtn} 
              onPress={() => navigation.navigate('ProductDetail')}
            >
              <Entypo name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.productCard, { marginLeft: 15 }]}>
          <Image source={require('../assets/red_apple.png')} style={styles.productImg} />
          <Text style={styles.productName}>Red Apple</Text>
          <Text style={styles.productUnit}>1kg, Priceg</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity 
      style={styles.addBtn} 
      onPress={() => navigation.navigate('ProductDetail')}>
              <Entypo name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 5. GROCERIES SECTION*/}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
        <View style={[styles.categoryCard, { backgroundColor: '#F8A44C20' }]}>
          <Image source={require('../assets/pulses.png')} style={styles.categoryImg} />
          <Text style={styles.categoryName}>Pulses</Text>
        </View>
        <View style={[styles.categoryCard, { backgroundColor: '#53B17520', marginLeft: 15 }]}>
          <Image source={require('../assets/rice.png')} style={styles.categoryImg} />
          <Text style={styles.categoryName}>Rice</Text>
        </View>
      </ScrollView>

      {/* 6. BEST SELLING / MEAT LIST */}
      <View style={styles.productListRow}>
        <View style={styles.productCard}>
          <Image source={require('../assets/beef_bone.png')} style={styles.productImg} />
          <Text style={styles.productName}>Beef Bone</Text>
          <Text style={styles.productUnit}>1kg, Priceg</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Entypo name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.productCard, { marginLeft: 15 }]}>
          <Image source={require('../assets/chicken.png')} style={styles.productImg} />
          <Text style={styles.productName}>Broiler Chicken</Text>
          <Text style={styles.productUnit}>1kg, Priceg</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Entypo name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Khoảng đệm cuối trang */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 20 },
  header: { alignItems: 'center', marginTop: 50 },
  logo: { width: 25, height: 30, marginBottom: 10, resizeMode: 'contain' },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { fontSize: 18, fontWeight: 'bold', color: '#4C4C4C', marginLeft: 5 },
  searchContainer: { flexDirection: 'row', backgroundColor: '#F2F3F2', padding: 15, borderRadius: 15, marginTop: 20, alignItems: 'center' },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 16 },
  banner: { width: '100%', height: 115, borderRadius: 15, marginTop: 20, resizeMode: 'contain' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold' },
  seeAll: { color: '#53B175', fontWeight: '600' },
  horizontalList: { marginBottom: 10 },
  productCard: { width: 173, padding: 15, borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E2', backgroundColor: 'white' },
  productImg: { width: 100, height: 80, alignSelf: 'center', resizeMode: 'contain' },
  productName: { fontWeight: 'bold', fontSize: 16, marginTop: 10 },
  productUnit: { color: '#7C7C7C', fontSize: 14 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  price: { fontSize: 18, fontWeight: 'bold' },
  addBtn: { backgroundColor: '#53B175', padding: 10, borderRadius: 15 },
  categoryCard: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 18, width: 250, height: 105 },
  categoryImg: { width: 70, height: 70, resizeMode: 'contain' },
  categoryName: { fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: '#3E423F' },
  productListRow: { flexDirection: 'row', marginBottom: 20 }
});

export default HomeScreen;
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons'; // Thêm FontAwesome để vẽ sao

const ProductDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PHẦN ẢNH SẢN PHẨM */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn}>
            <Feather name="share" size={24} color="black" />
          </TouchableOpacity>
          <Image source={require('../assets/red_apple.png')} style={styles.mainImg} />
        </View>

        <View style={styles.content}>
          {/* TIÊU ĐỀ & YÊU THÍCH */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>Naturel Red Apple</Text>
            <TouchableOpacity>
              <Feather name="heart" size={24} color="#7C7C7C" />
            </TouchableOpacity>
          </View>
          <Text style={styles.unit}>1kg, Price</Text>

          {/* SỐ LƯỢNG & GIÁ */}
          <View style={styles.quantityRow}>
            <View style={styles.counter}>
              <TouchableOpacity>
                <Entypo name="minus" size={28} color="#B3B3B3" />
              </TouchableOpacity>
              <View style={styles.countBox}>
                <Text style={styles.countText}>1</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="plus" size={28} color="#53B175" />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>$4.99</Text>
          </View>

          {/* CHI TIẾT SẢN PHẨM */}
          <View style={styles.sectionDivider} />
          <View style={styles.expandSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Product Detail</Text>
              <Feather name="chevron-down" size={24} color="black" />
            </View>
            <Text style={styles.detailText}>
              Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.
            </Text>
          </View>

          {/* DINH DƯỠNG (NUTRITIONS) */}
          <TouchableOpacity style={styles.infoRow}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.rowRight}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>100gr</Text>
              </View>
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>

          {/* ĐÁNH GIÁ (REVIEW) */}
          <TouchableOpacity style={styles.infoRow}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.rowRight}>
              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <FontAwesome key={item} name="star" size={18} color="#F3603F" style={{marginHorizontal: 2}} />
                ))}
              </View>
              <Feather name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* NÚT THÊM VÀO GIỎ */}
      <TouchableOpacity style={styles.basketBtn}>
        <Text style={styles.basketText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  imageContainer: { 
    height: 350, 
    backgroundColor: '#F2F3F2', 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center' 
  },
  backBtn: { position: 'absolute', top: 50, left: 20 },
  shareBtn: { position: 'absolute', top: 50, right: 20 },
  mainImg: { width: '80%', height: 200, resizeMode: 'contain' },
  content: { paddingHorizontal: 25, paddingVertical: 20 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  unit: { color: '#7C7C7C', fontSize: 16, fontWeight: '600', marginTop: 5 },
  quantityRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 30 },
  counter: { flexDirection: 'row', alignItems: 'center' },
  countBox: { 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    borderRadius: 17, 
    width: 45, 
    height: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 15 
  },
  countText: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  sectionDivider: { borderTopWidth: 1, borderTopColor: '#E2E2E2' },
  expandSection: { paddingVertical: 15 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#181725' },
  detailText: { color: '#7C7C7C', lineHeight: 21, fontSize: 13 },
  infoRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 15, 
    borderTopWidth: 1, 
    borderTopColor: '#E2E2E2' 
  },
  rowRight: { flexDirection: 'row', alignItems: 'center' },
  tag: { backgroundColor: '#EBEBEB', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 5, marginRight: 10 },
  tagText: { color: '#7C7C7C', fontSize: 12, fontWeight: '600' },
  stars: { flexDirection: 'row', marginRight: 10 },
  basketBtn: { backgroundColor: '#53B175', margin: 25, padding: 20, borderRadius: 19, alignItems: 'center' },
  basketText: { color: 'white', fontSize: 18, fontWeight: '600' }
});

export default ProductDetailScreen;
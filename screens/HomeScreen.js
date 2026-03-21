import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
  // Dữ liệu cho 4 ô vuông Insights
  const insights = [
    { id: '1', title: 'Scan new', desc: 'Scanned 483', icon: 'expand', color: '#F0F3FF', iconColor: '#5C6BC0' },
    { id: '2', title: 'Counterfeits', desc: 'Counterfeited 32', icon: 'exclamation-triangle', color: '#FFF5F0', iconColor: '#FF7043' },
    { id: '3', title: 'Success', desc: 'Checkouts 8', icon: 'check-circle', color: '#F1FBF2', iconColor: '#66BB6A' },
    { id: '4', title: 'Directory', desc: 'History 26', icon: 'calendar-alt', color: '#F0F9FF', iconColor: '#29B6F6' },
  ];

  const renderInsight = ({ item }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={item.icon} size={24} color={item.iconColor} />
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc}>{item.desc}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Profile */}
      <View style={styles.header}>
        <View>
          <Text style={styles.helloText}>Hello 👋</Text>
          <Text style={styles.nameText}>Christie Doe</Text>
        </View>
        <Image 
          source={{ uri: 'https://via.placeholder.com/50' }} 
          style={styles.avatar} 
        />
      </View>

      <Text style={styles.sectionTitle}>Your Insights</Text>

      {/* Lưới 2 cột */}
      <FlatList
        data={insights}
        renderItem={renderInsight}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />

      <View style={styles.exploreHeader}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <FontAwesome5 name="arrow-right" size={18} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 40, 
    marginBottom: 30 
  },
  helloText: { fontSize: 16, color: '#666' },
  nameText: { fontSize: 22, fontWeight: 'bold' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  row: { justifyContent: 'space-between' },
  card: { 
    width: '47%', 
    padding: 20, 
    borderRadius: 20, 
    marginBottom: 20, 
    alignItems: 'flex-start' 
  },
  iconContainer: { marginBottom: 15 },
  cardTitle: { fontWeight: 'bold', fontSize: 16, color: '#333' },
  cardDesc: { color: '#888', fontSize: 12, marginTop: 4 },
  exploreHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10 
  }
});

// QUAN TRỌNG: Dòng này giúp dứt điểm lỗi "invalid value for component prop"
export default HomeScreen;
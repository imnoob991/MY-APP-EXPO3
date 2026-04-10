import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import { 
  Ionicons, 
  MaterialCommunityIcons, 
  AntDesign,
  Feather,
  SimpleLineIcons
} from '@expo/vector-icons';

const MENU_ITEMS = [
  { id: '1', title: 'Orders', icon: 'shopping-outline', Lib: MaterialCommunityIcons },
  { id: '2', title: 'My Details', icon: 'idcard', Lib: AntDesign },
  { id: '3', title: 'Delivery Address', icon: 'location-outline', Lib: Ionicons },
  { id: '4', title: 'Payment Methods', icon: 'creditcard', Lib: AntDesign },
  { id: '5', title: 'Promo Cord', icon: 'ticket-outline', Lib: MaterialCommunityIcons },
  { id: '6', title: 'Notifecations', icon: 'bell-outline', Lib: MaterialCommunityIcons },
  { id: '7', title: 'Help', icon: 'help-circle-outline', Lib: Ionicons },
  { id: '8', title: 'About', icon: 'info-outline', Lib: MaterialCommunityIcons },
];

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {/* HEADER */}
          <View style={styles.profileHeader}>
            <Image 
              source={require('../assets/avatar.jpg')} 
              style={styles.avatar} 
            />
            <View style={styles.profileInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.userName}>Afsar Hossen</Text>
                <Feather name="edit-2" size={16} color="#53B175" />
              </View>
              <Text style={styles.userEmail}>lmshuvo97@gmail.com</Text>
            </View>
          </View>

          {/* MENU LIST */}
          <View style={styles.menuContainer}>
            {MENU_ITEMS.map((item) => (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <item.Lib name={item.icon} size={22} color="#181725" />
                  <Text style={styles.menuText}>{item.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#181725" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* NÚT LOG OUT - Đặt ngoài ScrollView để luôn nằm dưới cùng */}
        <View style={styles.logoutWrapper}>
          <TouchableOpacity style={styles.logoutBtn}>
            <SimpleLineIcons name="logout" size={20} color="#53B175" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between', // Đẩy phần trên và phần dưới ra xa nhau
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  profileInfo: {
    marginLeft: 20,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
    marginRight: 10,
  },
  userEmail: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#F2F3F2',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginLeft: 15,
  },
  logoutWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
    // Khoảng cách này để nút không bị dính sát thanh Tab Bar
    paddingBottom: Platform.OS === 'ios' ? 95 : 85, 
    backgroundColor: 'white',
  },
  logoutBtn: {
    flexDirection: 'row',
    backgroundColor: '#F2F3F2',
    height: 65,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIcon: {
    position: 'absolute',
    left: 25,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#53B175',
  },
});
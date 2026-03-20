import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { AppContext } from '../Context/AppContext';

const AccountScreen = () => {
  // Lấy hàm setIsLoggedIn từ Context để thực hiện đăng xuất
  const { setIsLoggedIn } = useContext(AppContext);

  const handleSignOut = () => {
    setIsLoggedIn(false); // Đổi trạng thái về false để quay lại AuthStack
  };

  return (
    <View style={styles.container}>
      {/* 1. Phần Header: Ảnh bìa và Avatar */}
      <View style={styles.header}>
        <View style={styles.blueBackground} />
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/man-hinh-iphone-11-pro-max-bi-am-xanh.jpg' }} // Thay bằng link ảnh của bạn
            style={styles.avatar} 
          />
        </View>
      </View>

      {/* 2. Phần Thông tin cá nhân */}
      <View style={styles.body}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.jobTitle}>Mobile developer</Text>
        
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, 
          now i am learning React Native
        </Text>

        {/* Nút Sign Out */}
        <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  
  // Header styles
  header: { height: 250, alignItems: 'center' },
  blueBackground: { 
    backgroundColor: '#00C2FF', 
    width: '100%', 
    height: 180 
  },
  avatarContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 75,
    // Đổ bóng cho avatar
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  avatar: { width: 140, height: 140, borderRadius: 70 },

  // Body styles
  body: { 
    flex: 1, 
    alignItems: 'center', 
    paddingHorizontal: 40, 
    marginTop: 20 
  },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  jobTitle: { fontSize: 14, color: '#00C2FF', marginVertical: 5, fontWeight: '500' },
  description: { 
    textAlign: 'center', 
    color: 'gray', 
    lineHeight: 20,
    marginBottom: 30 
  },
  
  // Button styles
  signOutBtn: { 
    backgroundColor: '#FFA500', 
    paddingHorizontal: 30, 
    paddingVertical: 10, 
    borderRadius: 5 
  },
  signOutText: { color: '#fff', fontWeight: 'bold' }
});

export default AccountScreen;
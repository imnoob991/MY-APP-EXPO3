import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  StatusBar,
  ScrollView,
  ImageBackground
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors'; // Màu primary: '#53B175'

const SignInScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} bounces={false}>
      {/* 1. IMAGEBACKGROUND VỚI CẠNH DƯỚI NGHIÊNG CHÉO
        Yêu cầu quan trọng: File ảnh signin_header.png phải là ảnh PNG 
        có phần cạnh dưới được cắt nghiêng chéo và trong suốt.
      */}
      <ImageBackground 
        // Đảm bảo file signin_header.png có trong assets
        source={require('../assets/signin_top.png')} 
        style={styles.headerBackground}
        resizeMode="cover"
      />
      
      {/* 2. PHẦN NỘI DUNG CHÍNH VỚI MÀU NỀN TRẮNG KHỚP NHAU */}
      <View style={styles.content}>
        <StatusBar barStyle="dark-content" />
        
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>
        
        {/* 3. Ô CHỌN QUỐC GIA & MÃ VÙNG */}
        <TouchableOpacity style={styles.inputArea} onPress={() => navigation.navigate('Number')}>
          <Image 
            // Dùng tạm link ảnh online làm cờ (bạn nên đổi thành ảnh assets)
            source={{ uri: 'https://flagcdn.com/w40/bd.png' }} 
            style={styles.flag} 
          />
          <Text style={styles.code}>+880</Text>
        </TouchableOpacity>

        {/* 4. PHẦN SOCIAL LOGIN */}
        <Text style={styles.orText}>Or connect with social media</Text>

        <TouchableOpacity style={[styles.socialBtn, styles.googleBtn]}>
          <FontAwesome name="google" size={24} color="white" />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, styles.facebookBtn]}>
          <FontAwesome name="facebook" size={24} color="white" />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    // Màu nền chính của toàn bộ màn hình phải là TRẮNG
    backgroundColor: '#FFFFFF' 
  },
  headerBackground: { 
    width: '100%', 
    height: 380, // Tăng chiều cao để phần nghiêng chéo hiện rõ
  },
  content: { 
    padding: 25,
    paddingTop: 10,
    // Màu nền ở đây cũng phải là TRẮNG để khớp với container
    backgroundColor: '#FFFFFF'
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 25,
    lineHeight: 32, // Khoảng cách dòng chuẩn
    fontFamily: 'gilroy-bold' // Nếu có font gilroy
  },
  inputArea: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', // Màu viền input
    paddingBottom: 12, 
    marginTop: 10
  },
  flag: { 
    width: 30, 
    height: 20, 
    marginRight: 15,
    borderRadius: 3 // Bo góc cờ một chút
  },
  code: { 
    fontSize: 18,
    fontFamily: 'gilroy-medium'
  },
  orText: { 
    textAlign: 'center', 
    color: '#828282', // Màu chữ phụ
    marginVertical: 40, 
    fontSize: 14,
    fontFamily: 'gilroy-medium'
  },
  socialBtn: { 
    flexDirection: 'row', 
    padding: 20, 
    borderRadius: 15, // Bo góc nút
    alignItems: 'center', 
    justifyContent: 'center', // Căn giữa icon và chữ
    marginBottom: 15,
    // Đổ bóng cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // Đổ bóng cho Android
    elevation: 3
  },
  googleBtn: { 
    backgroundColor: '#5383EC' // Màu Google chuẩn
  },
  facebookBtn: { 
    backgroundColor: '#4A66AC' // Màu Facebook chuẩn
  },
  socialText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600', 
    marginLeft: 15, // Khoảng cách giữa icon và chữ
    fontFamily: 'gilroy-semibold'
  }
});

export default SignInScreen;
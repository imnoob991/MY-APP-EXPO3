import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  TouchableOpacity, 
  Image 
} from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      // Đảm bảo file onboarding_bg.png đã có trong thư mục assets
      source={require('../assets/onboarding_bg.png')} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          {/* Logo củ cà rốt trắng nhỏ phía trên chữ Welcome */}
          <Image 
            source={require('../assets/logo_white.png')} 
            style={styles.icon} 
          />
          
          <Text style={styles.title}>Welcome{"\n"}to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    width: '100%', 
    height: '100%' 
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', // Làm tối ảnh nền một chút để chữ trắng nổi bật
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 90,
  },
  content: { 
    alignItems: 'center', 
    paddingHorizontal: 30,
    width: '100%'
  },
  icon: {
    width: 30,
    height: 35,
    marginBottom: 15,
    resizeMode: 'contain'
  },
  title: { 
    color: 'white', 
    fontSize: 48, 
    fontWeight: 'bold', 
    textAlign: 'center',
    lineHeight: 55
  },
  subtitle: { 
    color: '#FCFCFC', 
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 10,
    marginBottom: 40,
    opacity: 0.7
  },
  button: { 
    backgroundColor: '#53B175', // Màu xanh Nectar chuẩn
    paddingVertical: 20, 
    width: '100%', 
    borderRadius: 15, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  }
});

// QUAN TRỌNG: Dòng này giúp sửa lỗi "invalid value for component prop" của bạn
export default OnboardingScreen;
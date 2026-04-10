import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function OrderErrorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Nội dung Modal trắng */}
      <View style={styles.modalContent}>
        
        {/* Nút X - Nhấn vào để bỏ đi (quay lại Favourite) */}
        <TouchableOpacity 
          style={styles.closeIcon} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={28} color="#181725" />
        </TouchableOpacity>

        {/* Hình ảnh túi đồ ăn */}
        <View style={styles.imageWrapper}>
           <Image 
            source={require('../assets/order_error.png')} 
            style={styles.errorImage} 
          />
        </View>

        <Text style={styles.title}>Oops! Order Failed</Text>
        <Text style={styles.subtitle}>Something went terribly wrong.</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.retryBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.retryText}>Please Try Again</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.backHomeBtn}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Shop' })}
          >
            <Text style={styles.backHomeText}>Back to home</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Làm mờ màn hình Favourite phía sau
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-start',
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  errorImage: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
  },
  retryBtn: {
    backgroundColor: '#53B175',
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  retryText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  backHomeBtn: { height: 40, justifyContent: 'center', alignItems: 'center' },
  backHomeText: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
});
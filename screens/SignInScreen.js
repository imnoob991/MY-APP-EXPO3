import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Sửa lỗi Import: Không dùng { } cho Default Export
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';
// Sửa lỗi Import: Dùng { } cho Named Export
import { AppContext } from '../Context/AppContext';

const SignInScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      
      <CustomTextInput label="Email ID" placeholder="Enter your email here!" />
      <CustomTextInput label="Password" placeholder="Enter your password here!" secureTextEntry />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLoggedIn(true)} style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <IconButton title="Google" iconName="google" color="#db4437" />
        <IconButton title="Facebook" iconName="facebook-square" color="#4267B2" />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ marginTop: 30 }}>
        <Text>Not yet a member? <Text style={{ color: 'orange', fontWeight: 'bold' }}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 40 },
  forgotText: { alignSelf: 'flex-end', color: 'orange', marginBottom: 20 },
  loginBtn: { backgroundColor: 'orange', width: '100%', padding: 15, borderRadius: 8, alignItems: 'center' },
  loginText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  orText: { marginVertical: 20, color: '#666' },
  socialRow: { flexDirection: 'row', width: '100%' }
});

export default SignInScreen;
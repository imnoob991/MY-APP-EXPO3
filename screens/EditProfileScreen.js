import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

const EditProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlue} />
      <View style={styles.profileBox}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.avatar}
        />
        <Text style={styles.nameText}>Hung Nguyen</Text>
      </View>

      <View style={styles.inputSection}>
        <CustomTextInput label="Full Name" value="Hung Nguyen" />
        <CustomTextInput label="Email" value="hungnguyen@example.com" />
        <CustomTextInput label="Phone" placeholder="Enter phone number" />
        
        <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBlue: { height: 150, backgroundColor: '#00BFFF' },
  profileBox: { alignItems: 'center', marginTop: -50 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#fff' },
  nameText: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  inputSection: { padding: 20 },
  saveBtn: { backgroundColor: 'orange', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  saveText: { color: '#fff', fontWeight: 'bold' }
});

export default EditProfileScreen;
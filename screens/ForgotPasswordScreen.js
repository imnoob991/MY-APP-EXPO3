import React from 'react';
import { View, Text, Button } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Màn hình Quên mật khẩu (Phát triển sau)</Text>
    <Button title="Quay lại" onPress={() => navigation.goBack()} />
  </View>
);

export default ForgotPasswordScreen;
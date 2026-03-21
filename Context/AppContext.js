import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Khởi tạo Context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 1. Tự động load giỏ hàng từ bộ nhớ máy khi mở App
  useEffect(() => {
    const loadCart = async () => {
      try {
        const savedCart = await AsyncStorage.getItem('user_cart');
        if (savedCart !== null) {
          setCart(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Lỗi khi load giỏ hàng:", error);
      }
    };
    loadCart();
  }, []);

  // 2. Hàm thêm sản phẩm vào giỏ hàng và lưu vào AsyncStorage
  const addToCart = async (product) => {
    try {
      const newCart = [...cart, product];
      setCart(newCart);
      await AsyncStorage.setItem('user_cart', JSON.stringify(newCart));
    } catch (error) {
      console.error("Lỗi khi lưu giỏ hàng:", error);
    }
  };

  // 3. Hàm xóa sạch giỏ hàng (nếu cần dùng sau khi thanh toán)
  const clearCart = async () => {
    try {
      setCart([]);
      await AsyncStorage.removeItem('user_cart');
    } catch (error) {
      console.error("Lỗi khi xóa giỏ hàng:", error);
    }
  };

  return (
    <AppContext.Provider value={{ cart, setCart, addToCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};
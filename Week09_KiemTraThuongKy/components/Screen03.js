import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import Icon from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Screen03({ route }) {
  const { product } = route.params;
  const dispatch = useDispatch();
  
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigation.navigate('CartScreen');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(233, 65, 65, 0.1)',
          width: '100%',
          alignItems: 'center',
          paddingVertical: 50,
        }}>
        <Image
          source={product.uri}
          style={{
            width: 200,
            height: 190,
          }}
        />
      </View>
      <View style={{ gap: 10, paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{product.name}</Text>
        <View style={{ flexDirection: 'row', gap: 30 }}>
          <Text style={{ color: 'black', opacity: 0.59, fontSize: 20 }}>
            {product.promotion} | 350
          </Text>
          <Text style={{ textDecorationLine: 'line-through', fontSize: 20 }}>
            {product.price}
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Description</Text>
        <Text style={{ textAlign: 'justify' }}>{product.desc}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
          }}>
          <AntDesign name="hearto" size={24} color="black" />
          <TouchableOpacity
            onPress={handleAddToCart}
            style={{
              backgroundColor: '#E94141',
              padding: 10,
              borderRadius: 5,
              width: 200,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

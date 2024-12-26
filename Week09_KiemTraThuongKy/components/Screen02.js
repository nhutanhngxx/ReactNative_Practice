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

import axios from 'axios';
import Icon from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Screen02({ navigation, route }) {
  const mockAPI = 'https://6731c58c7aaf2a9aff11f9e1.mockapi.io/api/Product';

  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(mockAPI);
      const productsData = response.data;
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePress = (item) => {
    navigation.navigate('Screen03', { product: item });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={{
        marginBottom: 50,
        padding: 10,
        backgroundColor: 'rgba(247, 186, 131, 0.15)',
        justifyContent: 'space-around',
        borderRadius: 20,
        height: 200,
      }}>
      <Image source={item.uri} style={{ width: 100, height: 85 }} />
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
        {item.name}
      </Text>
      <Text>$ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'space-between',
        padding: 20,
      }}>
      <View>
        <Text style={{ color: '#E94141', fontWeight: 'bold' }}>
          The world’s Best Bike
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#E94141',
            borderWidth: 1,
            width: 80,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          All
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#E94141',
            borderWidth: 1,
            width: 80,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          Roadbike
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#E94141',
            borderWidth: 1,
            width: 80,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          Mountain
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
        }}>
        <FlatList
          data={products}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          columnWrapperStyle={{
            gap: 50,
          }}
        />
      </View>

      <View style={{}}></View>
    </SafeAreaView>
  );
}

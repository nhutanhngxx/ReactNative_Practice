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

export default function Screen01({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 50,
      }}>
      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      <View>
        <Image
          source={require('../assets/anh1.png')}
          style={{ width: 210, height: 200 }}
        />
      </View>

      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25 }}>
          POWER BIKE SHOP
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#E94141',
          width: 100,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: ' bold',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen02')}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { style } from './Style.js';

const Screen02 = () => {
  return (
    <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} style={style.background}>
    <View style = {style.container}>
      <View style={style.circle}>
        <View style={style.circleSmall}></View>
      </View>

      <View style = {style.text1}>
        <Text style = {style.content1}>GROW</Text>
        <Text style = {style.content1}>YOUR BUSINESS</Text>
      </View>

      <View style = {style.text2}>
        <Text style = {style.content2}>We will help you to grow your business using online server</Text>
      </View>

      <View style={style.containerButton}>
      <TouchableOpacity style={style.button} onPress={() => alert('Login Pressed')}>
        <Text style={style.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.button, style.signupButton]} onPress={() => alert('Sign Up Pressed')}>
        <Text style={style.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      </View>

      <View style = {style.question}>
        <Text style={{fontWeight: 'bold', fontSize: 18, margin: 10}}>HOW WE WORK?</Text>
        <Text></Text>
      </View>
    </View>
    </LinearGradient>
  );
};

export default Screen02;
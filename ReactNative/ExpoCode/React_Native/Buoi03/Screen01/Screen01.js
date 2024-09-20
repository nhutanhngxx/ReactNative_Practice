import React from "react";
import { Text, Image, View, StyleSheet, Button } from "react-native";
// import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "./Style.js";

const Screen01 = () => {
  return (
    <LinearGradient colors={["#00CCF9", "#00CCF9"]} style={style.background}>
      <View style={style.container}>
        <View style={style.circle}>
          <View style={style.circleSmall}></View>
        </View>

        <View style={style.text1}>
          <Text style={style.content1}>GROW</Text>
          <Text style={style.content1}>YOUR BUSINESS</Text>
        </View>

        <View style={style.text2}>
          <Text style={style.content2}>
            We will help you to grow your business using online server
          </Text>
        </View>

        <View style={style.button}>
          <Button title="LOGIN"></Button>
          <Button title="SIGN UP"></Button>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Screen01;

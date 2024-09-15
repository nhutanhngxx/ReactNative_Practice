import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

import { style } from "./Style.js";

const Screen07 = () => {
  return (
    <LinearGradient colors={["#FBCB00", "#BF9A00"]} style={style.background}>
      <View style={style.container}>
        <View style={{ width: "80%" }}>
          <Text style={style.h1}>LOGIN</Text>
        </View>

        <View style={style.type}>
          <Input
            style={{ width: "90%", backgroundColor: 0, height: 50 }}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor={"black"}
            leftIcon={{ name: "person", color: "black" }}
          />
        </View>

        <View style={style.type}>
          <Input
            style={{ width: "90%", backgroundColor: 0, height: 50 }}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor={"black"}
            leftIcon={{ name: "person", color: "black" }}
            rightIcon={{ name: "visibility", color: "black" }}
          />
        </View>

        <View style={{ width: "80%", paddingTop: 50 }}>
          <Button
            title={"LOGIN"}
            titleStyle={{ color: "white", fontWeight: "bold" }}
            buttonStyle={{
              backgroundColor: "black",
              height: 50,
            }}
          ></Button>
        </View>

        <View style={{ width: "80%", paddingTop: 50 }}>
          <Button
            title={"CREATE ACCOUNT"}
            titleStyle={{ color: "black", fontWeight: "bold" }}
            buttonStyle={{
              backgroundColor: 0,
              height: 50,
            }}
          ></Button>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Screen07;

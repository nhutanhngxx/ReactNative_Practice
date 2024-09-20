import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { style } from "./Style.js";

const Screen03 = () => {
  return (
    <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} style={style.background}>
      <View style={style.container}>
        <View>
          <Image
            source={require("./Image/Lock.png")}
            style={{ height: 169, width: 150 }}
          />
        </View>

        <View style={style.h1}>
          <Text style={{ fontWeight: "bold", fontSize: 35 }}>FORGET</Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>PASSWORD</Text>
        </View>

        <View style={style.h2}>
          <Text style={{ fontSize: 15, padding: 20, fontWeight: "bold" }}>
            Provide your account's email for which you want to reset your password
          </Text>
        </View>

        <View style={style.typeEmail}>
          <Image
            source={require("./Image/Email.png")}
            style={{ height: 64, width: 60 }}
          />
          <Text style={{ fontSize: 15, padding: 10 }}>Email</Text>
        </View>

        <View style={style.button}>
          <Button
            title="NEXT"
            buttonStyle={{ backgroundColor: "#E3C000", height: 60 }}
            titleStyle={{ fontSize: 20, fontWeight: "bold", color: "black" }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Screen03;

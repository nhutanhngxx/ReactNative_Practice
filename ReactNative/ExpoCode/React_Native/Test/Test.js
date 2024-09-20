import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Test = () => {
  return (
    <LinearGradient colors={["#FBCB00", "#BF9A00"]} style={style.background}>
      sfchgnc
    </LinearGradient>
  );
};

export default Test;

const style = StyleSheet.create({
  container: {},
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

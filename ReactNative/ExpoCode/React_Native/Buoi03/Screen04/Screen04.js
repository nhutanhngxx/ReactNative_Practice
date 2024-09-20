import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { style } from "./Style.js";
import { TextInput } from "react-native-paper";

const Screen04 = () => {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={style.background}
    >
      <View style={style.container}>
        <View>
          <Text style={{ fontSize: 60, fontWeight: "bold", padding: 30 }}>
            CODE
          </Text>
        </View>

        <View style={style.h1}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>VERIFICATION</Text>
        </View>

        <View style={style.h2}>
          <Text style={{ fontSize: 15, paddingTop: 20, fontWeight: "bold" }}>
            Enter ontime password sent on
          </Text>
          <Text style={{ fontSize: 15, paddingBottom: 20, fontWeight: "bold" }}>
            ++849092605798
          </Text>
        </View>

        <View style={style.typeCode}>
          <TextInput style={style.inputCode}></TextInput>
          <TextInput style={style.inputCode}></TextInput>
          <TextInput style={style.inputCode}></TextInput>
          <TextInput style={style.inputCode}></TextInput>
          <TextInput style={style.inputCode}></TextInput>
          <TextInput style={style.inputCode}></TextInput>
        </View>

        <View style={style.button}>
          <Button
            title="VERIFY CODE"
            buttonStyle={{ backgroundColor: "#E3C000", height: 50 }}
            titleStyle={{ fontSize: 20, fontWeight: "bold", color: "black" }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

{
  /* Sử dụng thuộc tính inputStyle để chỉnh sửa kiểu dáng của văn bản bên trong input.  */
}
{
  /* Sử dụng thuộc tính containerStyle để chỉnh sửa kiểu dáng của toàn bộ container chứa Input. */
}
{
  /* Sử dụng thuộc tính inputContainerStyle để chỉnh sửa kiểu dáng của container bao quanh văn bản Input. */
}
{
  /* Sử dụng thuộc tính labelStyle để chỉnh sửa kiểu dáng của nhãn (label) nếu có. */
}

export default Screen04;

import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Card } from "react-native-paper";
import React, { useEffect, useState } from "react";

export default function Telephone({ route, navigation }) {
  const { selectedColor, supplier, price, img } = route.params || {};
  const [currentImage, setCurrentImage] = useState(
    img || require("../assets/vs_red.png")
  );
  useEffect(() => {
    if (img) {
      setCurrentImage(img);
    }
  }, [img]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 20,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image source={currentImage} style={{ width: 301, height: 361 }} />
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 15 }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row", width: 150 }}>
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 15 }}>(Xem 828 đánh giá)</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 150 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>1.790.000 đ</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "black",
              opacity: "0.58",
              textDecorationLine: "line-through",
            }}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#FA0000",
            paddingRight: 10,
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          source={require("../assets/Chamhoi.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <View>
        <Button
          title="4 MÀU - CHỌN MÀU"
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: 0,
            borderWidth: 1,
            borderBlockColor: "black",
          }}
          titleStyle={{ color: "black" }}
          onPress={() => navigation.navigate("Color")}
        />
      </View>
      <View>
        <Button
          title="CHỌN MUA"
          buttonStyle={{
            backgroundColor: "#EE0A0A",
            borderRadius: 10,
            height: 45,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

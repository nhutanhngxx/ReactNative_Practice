import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Card } from "react-native-paper";
import { useState } from "react";

const supplier = "Tiki Tradding";
const price = "1.790.000 đ";

const colors = [
  {
    id: 0,
    title: "Silver",
    hex: "#C5F1FB",
    img: require("../assets/vs_silver.png"),
  },
  {
    id: 1,
    title: "Đỏ",
    hex: "#F30D0D",
    img: require("../assets/vs_red.png"),
  },
  {
    id: 2,
    title: "Đen",
    hex: "#000000",
    img: require("../assets/vs_black.png"),
  },
  {
    id: 3,
    title: "Xanh dương",
    hex: "#234896",
    img: require("../assets/vs_blue.png"),
  },
];

export default function Color({ navigation }) {
  const [selectedColor, setSelectedColor] = useState(colors[2]);

  // Chuyển về màn hình Home và truyền dữ liệu
  const handleDone = () => {
    navigation.navigate("Home", {
      selectedColor: selectedColor.title,
      img: selectedColor.img,
      supplier,
      price,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", gap: 20, padding: 10 }}>
        <Image source={selectedColor.img} style={{ width: 112, height: 132 }} />
        <View style={{ flex: 1, gap: 10 }}>
          <Text style={{ fontSize: 15, flexWrap: "wrap" }}>
            Điện Thoại Vsmart Joy 3 hàng chính hãng
          </Text>
          <Text style={{ fontSize: 15 }}>
            Màu: <b> {selectedColor.title} </b>
          </Text>
          <Text style={{ fontSize: 15 }}>
            Cung cấp bởi: <b> {supplier} </b>
          </Text>
          <Text style={{ fontSize: 18 }}>
            <b>{price}</b>
          </Text>
        </View>
      </View>

      <View
        style={{ backgroundColor: "#C4C4C4", marginTop: "auto", padding: 20 }}
      >
        <Text style={{ fontSize: 18 }}>Chọn một màu bên dưới:</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            padding: 10,
          }}
        >
          {colors.map((color) => (
            <Button
              key={color.id}
              buttonStyle={{
                backgroundColor: color.hex,
                width: 85,
                height: 80,
              }}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>

        <Button
          title="XONG"
          titleStyle={{ fontWeight: "bold", fontSize: 20 }}
          containerStyle={{ padding: 10 }}
          buttonStyle={{
            backgroundColor: "#1952E2",
            opacity: "0.58",
            borderRadius: 10,
            height: 45,
          }}
          onPress={handleDone}
        />
      </View>
    </SafeAreaView>
  );
}

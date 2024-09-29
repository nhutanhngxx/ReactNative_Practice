import { useState } from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import { Button } from "react-native-elements";

export default function ColorDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", gap: 20, padding: 10 }}>
        <Image
          source={require("../assets/vs_red.png")}
          style={{ width: 112, height: 132 }}
        />
        <View style={{ flex: 1, gap: 10 }}>
          <Text style={{ fontSize: 15, flexWrap: "wrap" }}>
            Điện Thoại Vsmart Joy 3 hàng chính hãng
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
          <Button
            buttonStyle={{ backgroundColor: "#C5F1FB", width: 85, height: 80 }}
            onPress={() => navigation.navigate("ColorDetail")}
          />
          <Button
            buttonStyle={{ backgroundColor: "#F30D0D", width: 85, height: 80 }}
            onPress={() => navigation.navigate("ColorDetail")}
          />
          <Button
            buttonStyle={{ backgroundColor: "#000000", width: 85, height: 80 }}
            onPress={() => navigation.navigate("ColorDetail")}
          />
          <Button
            buttonStyle={{ backgroundColor: "#234896", width: 85, height: 80 }}
            onPress={() => navigation.navigate("ColorDetail")}
          />
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
          onPress={() => navigation.navigate("ColorDetail")}
        />
      </View>
    </SafeAreaView>
  );
}

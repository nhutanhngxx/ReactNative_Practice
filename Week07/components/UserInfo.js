import { EvilIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
// npm install react-native-elements react-native-vector-icons
import { Icon, Input, Button } from "react-native-elements";

export default function UserInfo() {
  // const [email, setEmail] = useState("");

  // useEffect(() => {
  //   if (route.params?.email) {
  //     setEmail(route.params.email);
  //   }
  // }, [route.params?.email]);
  return (
    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
      <Image source={require("../assets/Avata.png")} />
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Hi Twinkle</Text>
        <Text style={{ fontWeight: "bold" }}>Have agrate day a head</Text>
      </View>
    </View>
  );
}

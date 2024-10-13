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

export default function API_Screen_01({ navigation, route }) {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
      <View style={{ gap: 80, alignItems: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/Image95.png")}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#8353E2" }}>
          MANAGE YOUR TASK
        </Text>
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          leftIcon={
            <Icon
              name="email"
              size={24}
              color="black"
              style={{ paddingRight: 10 }}
            />
          }
          placeholder="Enter your email"
          inputContainerStyle={{ borderBottomWidth: 0, marginBottom: -20 }}
          containerStyle={{
            borderWidth: 1,
            borderRadius: 25,
            width: 320,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <Button
          onPress={() => navigation.navigate("API_Screen_02", { email })}
          title={"GET STARTED"}
          iconPosition="right"
          icon={
            <EvilIcons
              name="arrow-right"
              size={24}
              color="white"
              style={{ paddingLeft: 10 }}
            />
          }
          buttonStyle={{
            width: 200,
            height: 50,
            padding: 10,
            borderRadius: 25,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

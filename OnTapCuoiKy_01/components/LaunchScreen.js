import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-web";

const LaunchScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ paddingTop: 50, width: "80%" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(233, 65, 65, 0.1)",
          padding: 30,
          borderRadius: 20,
        }}
      >
        <Image
          source={{
            uri: "https://i.ibb.co/vkdYjFb/bifour-removebg-preview.png",
          }}
          style={{ width: 300, height: undefined, aspectRatio: 1 }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          POWER BIKE SHOP
        </Text>
      </View>
      <View style={{ paddingBottom: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ScreenProducts")}
          style={{
            backgroundColor: "#E94141",
            width: 300,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen;

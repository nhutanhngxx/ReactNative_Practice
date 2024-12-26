import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import axios from "axios";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  if (!product) {
    return <Text>No product found!</Text>;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(233, 65, 65, 0.1)",
          borderRadius: 20,
          padding: 10,
          margin: 10,
        }}
      >
        <Image
          source={{ uri: product.uri }}
          style={{
            width: 350,
            height: undefined,
            aspectRatio: 1,
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={{ fontSize: 50, fontWeight: "bold", margin: 10 }}>
        {product.name}
      </Text>
      <View style={{ flexDirection: "row", gap: 20, margin: 10 }}>
        <Text style={{ fontSize: 30, color: "rgba(0, 0, 0, 0.59)" }}>
          {product.promotion}
        </Text>
        <Text style={{ fontSize: 30 }}>$ {product.price}</Text>
      </View>
      <Text style={{ fontSize: 25, margin: 10 }}>Description</Text>
      <Text style={{ fontSize: 20, textAlign: "justify", margin: 10 }}>
        {product.desc}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <AntDesign name="hearto" size={50} color="black" />
        <TouchableOpacity
          style={{
            backgroundColor: "#E94141",
            width: 300,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

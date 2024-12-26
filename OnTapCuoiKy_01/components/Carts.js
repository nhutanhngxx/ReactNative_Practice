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

const Carts = ({ route }) => {
  const mockAPI_Cart = "https://6731c58c7aaf2a9aff11f9e1.mockapi.io/api/Cart";
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.product.price, 0);

  const fecthCart = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(mockAPI_Cart);
      const cartData = response.data;
      setCart(cartData);
    } catch (error) {
      console.error("Error fetching cart: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fecthCart();
  }, []);

  const renderCart = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Image
          source={{ uri: item.product.uri }}
          style={{ width: 100, height: undefined, aspectRatio: 1 }}
          resizeMode="contain"
        />
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {item.product.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <AntDesign name="minussquare" size={24} color="black" />
            <Text style={{ fontSize: 20 }}>{item.quantity}</Text>
            <AntDesign name="plussquare" size={24} color="black" />
          </View>
          <Text style={{ fontSize: 20 }}>$ {total} </Text>
        </View>
      </View>
      <View>
        <AntDesign name="delete" size={24} color="red" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#E94141" }}>
          Your Carts
        </Text>
      </View>
      <View>
        <FlatList data={cart} renderItem={renderCart} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#E94141",
          width: "60%",
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          position: "absolute",
          bottom: 50,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          CHECK OUT
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Carts;

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

const category = ["All", "Roadbike", "Mountain"];

const ScreenProducts = ({ navigation }) => {
  const mockAPI = "https://6731c58c7aaf2a9aff11f9e1.mockapi.io/api/Product";

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(mockAPI);
      const productsData = response.data;
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDetail = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleDetail(item)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 250,
        gap: 5,
        margin: 5,
        backgroundColor: "rgba(233, 65, 65, 0.1)",
        borderRadius: 20,
      }}
    >
      <Image
        source={{ uri: item.uri }}
        style={{ width: 150, height: undefined, aspectRatio: 1 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          color: "rgba(0, 0, 0, 0.6)",
        }}
      >
        {item.name}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>$ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#E94141" }}>
          The world's Best Bike
        </Text>
        <AntDesign
          name="shoppingcart"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Carts")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "#E94141",
            }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20 }}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20 }}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={products}
          renderItem={renderProduct}
          style={{ width: "100%" }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ScreenProducts;

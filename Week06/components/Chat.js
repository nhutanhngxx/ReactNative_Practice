import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Icon from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const products = [
  {
    id: "0",
    title: "Ca nấu lẩu, nấu mì mini",
    supplier: "Devang",
    img: require("../assets/ca_nau_lau.png"),
  },
  {
    id: "1",
    title: "1KG Khô gà bơ tỏi",
    supplier: "LTD Food",
    img: require("../assets/ga_bo_toi.png"),
  },
  {
    id: "2",
    title: "Xe cần cẩu đa năng",
    supplier: "Thế giới đồ chơi",
    img: require("../assets/xe_can_cau.png"),
  },
  {
    id: "3",
    title: "Đồ chơi dạng mô hình",
    supplier: "Thế giới đồ chơi",
    img: require("../assets/do_choi_dang_mo_hinh.png"),
  },
  {
    id: "4",
    title: "Lãnh đạo giản đơn",
    supplier: "Minh Long Book",
    img: require("../assets/lanh_dao_gian_don.png"),
  },
  {
    id: "5",
    title: "Hiểu lòng con trẻ",
    supplier: "Minh Long Book",
    img: require("../assets/hieu_long_con_tre.png"),
  },
];

const Items = ({ title, supplier, img }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      borderTopWidth: 1,
      alignItems: "center",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignContent: "center",
      }}
    >
      <Image source={img} />
      <View>
        <Text>{title}</Text>
        <Text>Shop {supplier}</Text>
      </View>
    </View>
    <Button
      title={"Chat"}
      buttonStyle={{
        backgroundColor: "#F31111",
        borderRadius: 5,
        width: 88,
        height: 38,
      }}
    />
  </View>
);

export default function Chat({}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1BA9FF",
          height: 42,
          padding: 10,
        }}
      >
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Chat
        </Text>
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          <Text style={{ textAlign: "center", margin: 10 }}>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!
          </Text>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <Items
                title={item.title}
                supplier={item.supplier}
                img={item.img}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1BA9FF",
          height: 42,
          padding: 10,
        }}
      >
        <TouchableOpacity>
          <Feather name="menu" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="back" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

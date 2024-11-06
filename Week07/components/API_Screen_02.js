import { EvilIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
// npm install react-native-elements react-native-vector-icons
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon, Input, Button } from "react-native-elements";

import UserInfo from "./UserInfo";

export default function API_Screen_02({ navigation, route }) {
  const [dataList, setDataList] = useState([
    { id: 1, title: "To check email" },
    { id: 2, title: "UI task web page" },
    { id: 3, title: "Learn JavaScript basic" },
    { id: 4, title: "Learn HTML Advance" },
    { id: 5, title: "Medical App UI" },
    { id: 6, title: "Learn React Native" },
  ]);
  useEffect(() => {
    if (route.params?.newJob) {
      const newJob = { id: dataList.length + 1, title: route.params.newJob };
      setDataList([...dataList, newJob]);
    }
  }, [route.params?.newJob]);
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 50,
        borderRadius: 25,
        // borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 12,
        backgroundColor: "#DEE1E6",
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 3.84,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          name="checkbox-outline"
          size={25}
          color="#E05858"
          style={{ paddingRight: 10 }}
        />
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
      </View>
      <FontAwesome5 name="pencil-alt" size={20} color="#E05858" />
    </View>
  );

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            paddingHorizontal: 30,
            paddingTop: 20,
            paddingBottom: 30,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <UserInfo />
        </View>
        <Input
          leftIcon={
            <Icon
              name="search"
              size={24}
              color="black"
              style={{ paddingRight: 10 }}
            />
          }
          placeholder="Search..."
          inputContainerStyle={{
            borderBottomWidth: 0,
            marginBottom: -20,
            height: 40,
          }}
          containerStyle={{
            borderWidth: 1,
            borderRadius: 10,
            width: 320,
            height: 40,
          }}
        />
        <View
          style={{ padding: 20, height: 600, width: "95%", paddingTop: 50 }}
        >
          <FlatList
            data={dataList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={{}}
            numColumns={1}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Button
          onPress={() => navigation.navigate("API_Screen_03")}
          icon={<Icon name="add" size={30} color="white" />}
          buttonStyle={{
            width: 50,
            height: 50,
            borderRadius: 30,
            margin: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

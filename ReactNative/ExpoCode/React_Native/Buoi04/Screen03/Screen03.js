import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Button, ButtonGroup, Input } from "react-native-elements";
import { style } from "../Screen03/Style";

const Screen03Buoi04 = () => {
  // const [text, setText] = useState("");
  const new_price = 141800;
  const old_price = 141800;
  const quantity = 0;
  const temp_price = 0;

  return (
    <SafeAreaView style={style.container}>
      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          height: "45%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={style.detail}>
          <View>
            <Image
              source={require("./Img/book.png")}
              style={{ width: 104, height: 127 }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#EE0D0D" }}
            >
              {new_price} đ
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#808080",
                textDecorationLine: "line-through",
              }}
            >
              {old_price} đ
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  title={"-"}
                  titleStyle={{
                    fontWeight: "bold",
                  }}
                  buttonStyle={{ height: 25, width: 25 }}
                />
                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>
                  {quantity}
                </Text>
                <Button
                  title={"+"}
                  titleStyle={{
                    fontWeight: "bold",
                  }}
                  buttonStyle={{ height: 25, width: 25 }}
                />
              </View>
              <View>
                <Button
                  title={"Mua sau"}
                  buttonStyle={{ backgroundColor: 0, height: 25 }}
                  titleStyle={{
                    color: "#134FEC",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            Mã giảm giá đã lưu
          </Text>
          <Button
            title={"Xem tại đây"}
            titleStyle={{ fontSize: 12, fontWeight: "bold", color: "#134FEC" }}
            buttonStyle={{ backgroundColor: 0, height: 25 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              width: 208,
              height: 45,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Mã giảm giá
            </Text>
          </View>
          <Button
            title={"Áp dụng"}
            titleStyle={{ fontSize: 20, fontWeight: "bold" }}
            buttonStyle={{ backgroundColor: "#0A5EB7", height: 45, width: 99 }}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          height: 50,
          padding: 10,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Button
          title={"Nhập tại đây?"}
          titleStyle={{ color: "#134FEC", fontSize: 12, fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: 0, height: 25 }}
        />
      </View>

      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          height: 50,
          padding: 10,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tạm tính</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#EE0D0D" }}>
          {temp_price} đ
        </Text>
      </View>

      <View
        style={{
          marginTop: "auto",
          backgroundColor: "white",
          height: "19%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#808080" }}>
            Thành tiền
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#EE0D0D" }}>
            {temp_price} đ
          </Text>
        </View>
        <Button
          title={"TIẾN HÀNH ĐẶT HÀNG"}
          titleStyle={{
            fontSize: 20,
            fontWeight: "bold",
          }}
          buttonStyle={{
            width: "90%",
            backgroundColor: "#E53935",
            alignSelf: "center",
            marginBottom: 10,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen03Buoi04;

import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { TextInput } from "react-native-paper";

import { style } from "./Style.js";

const Screen08 = () => {
  return (
    <View style={style.container}>
      <View style={style.eyeball}>
        <Image source={require("./Image/Icon.png")} />
      </View>

      <View style={style.type}>
        <Input
          placeholder="Please input user name"
          leftIcon={{ name: "person-outline", color: "#386FFC" }}
          style={{ width: "80%" }}
        />
      </View>

      <View style={style.type}>
        <Input
          placeholder="Please input password"
          leftIcon={{ name: "lock-outline", color: "#386FFC" }}
        />
      </View>

      <View style={style.buttonLogin}>
        <Button
          title="Login"
          buttonStyle={{ backgroundColor: "#386FFC", height: 50 }}
        />
      </View>

      <View style={style.buttonEvent}>
        <Button
          title="Register"
          titleStyle={{ color: "black" }}
          buttonStyle={{ backgroundColor: 0, height: 50 }}
        />
        <Button
          title="Forgot Password"
          titleStyle={{ color: "black" }}
          buttonStyle={{ backgroundColor: 0, height: 50 }}
        />
      </View>

      <View style={style.other}>
        <View style={style.line} />
        <Text style={style.text}>Other Login Methods</Text>
        <View style={style.line} />
      </View>

      <View style={style.buttons}>
        <Button
          buttonStyle={{ height: 80, width: 80, backgroundColor: '#3AB4FF', borderRadius: 10 }}
          style={style.button}
          icon={{
            name: "user-plus",
            type: "font-awesome",
            color: "white",
            size: 40
          }}
        />
        <Button
          buttonStyle={{ height: 80, width: 80, backgroundColor: '#F4AA47', borderRadius: 10 }}
          icon={{
            name: "wifi",
            type: "font-awesome",
            color: "white",
            size: 40
          }}
        />
        <Button
          buttonStyle={{ height: 80, width: 80, backgroundColor: '#3A579C', borderRadius: 10 }}
          style={style.button}
          icon={{
            name: "facebook",
            type: "font-awesome",
            color: "white",
            size: 40
          }}
        />
      </View>
    </View>
  );
};

export default Screen08;

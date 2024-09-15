import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { style } from "./Style.js";

const Screen05 = () => {

  return (
    <View style={style.container}>
      <View style={style.h1}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>LOGIN</Text>
      </View>

      <View style={style.typeEmail}>
        <TextInput placeholder="Email" style={style.inputEmail} />
      </View>

      <View style={style.typePassword}>
        <TextInput placeholder="Password" style={style.inputPassword}>
        </TextInput>
        {/* <Image
          source={require("./Image/Eye.png")}
          style={{ height: 36, width: 38 }}
        /> */}
      </View>

      <View style={style.buttonLogin}>
        <Button
          title={"LOGIN"}
          titleStyle={{ fontSize: 20, fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: "#E53935", height: 45 }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 15, paddingBottom: 10 }}>
          {" "}
          When you agree to terms and conditions{" "}
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 15, color: "#5D25FA", paddingBottom: 10 }}>
          For got your password?
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 15, paddingBottom: 30 }}> or Login with </Text>
      </View>

      <View style={style.buttons}>
        <Button
          title={"f"} 
          titleStyle={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center'}}
          buttonStyle={{height: 45, width: 90, backgroundColor: '#25479B'}}
        />

        <Button
          title={"Z"} 
          titleStyle={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center'}}
          buttonStyle={{height: 45, width: 90, backgroundColor: '#0F8EE0'}}
        />

        <Button
          buttonStyle={{height: 45, width: 90, backgroundColor: '#FFFFFF', borderWidth: 1}}
          icon={<Image source={require("./Image/IconGoogle.png")} />}
        />
      </View>
    </View>
  );
};

export default Screen05;

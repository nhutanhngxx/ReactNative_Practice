import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { TextInput } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import RadioGroup, {RadioButton} from "react-native-radio-buttons-group";

import { style } from "./Style.js";

// const radioButton = useMemo(
//   () => [
//     { id: "1", label: "Male", value: "option1" },
//     { id: "2", label: "Female", value: "option2" },
//   ],
//   []
// );

// const [selectedId, setSelectedId] = useState(null);

const Screen06 = () => {
  return (
    <View style={style.container}>
      <View style={style.h1}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>REGISTER</Text>
      </View>

      <View style={style.type}>
        <TextInput placeholder="Name" style={style.input} />
      </View>

      <View style={style.type}>
        <TextInput placeholder="Phone" style={style.input}></TextInput>
      </View>

      <View style={style.type}>
        <TextInput placeholder="Email" style={style.input} />
      </View>

      <View style={style.type}>
        <TextInput placeholder="Password" style={style.input} />
      </View>

      <View style={style.type}>
        <TextInput placeholder="Birthday" style={style.input} />
      </View>

      <View style={style.radioButtons}>
        <RadioButton
          id="1"
          label="Male"
          value="Male"
          // onPress={() => setSelectedId("1")}
          // selected={selectedId === "1"}
        />
        <RadioButton
          id="2" 
          label="Female" 
          value="Female" 
          // onPress={() => setSelectedId("2")}
          // onPress={() => setSelectedId("2")}
          // selected={selectedId === "2"}
        />
      </View>

      {/* <View style={style.radioButtonWrapper}> */}
      {/* <RadioButton
          id="2"
          label="Female"
          value="female"
          onPress={() => setSelectedId("2")}
          selected={selectedId === "2"}
        />
      </View> */}

      <View style={style.buttonRegister}>
        <Button
          title={"REGISTER"}
          titleStyle={{ fontSize: 20, fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: "#E53935", height: 45 }}
        ></Button>
      </View>

      <View></View>

      <View>
        <Text style={{ fontSize: 15, paddingBottom: 10 }}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
};

export default Screen06;

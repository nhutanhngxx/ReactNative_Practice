import { EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
// npm install react-native-elements react-native-vector-icons
import { Icon, Input, Button } from "react-native-elements";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import UserInfo from "./UserInfo";

export default function API_Screen_03({ navigation, route }) {
  const [job, setJob] = useState("");
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
          <UserInfo />
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            //   borderWidth: 1,
            height: "80%",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold", padding: 20 }}>
              ADD YOUR JOB
            </Text>
          </View>
          <View>
            <Input
              value={job}
              onChangeText={(text) => setJob(text)}
              leftIcon={
                <FontAwesome5
                  name="clipboard-list"
                  size={24}
                  color="#E05858"
                  style={{ paddingHorizontal: 10 }}
                />
              }
              placeholder="Input your job..."
              inputContainerStyle={{
                borderBottomWidth: 0,
                marginBottom: -20,
                height: 50,
              }}
              containerStyle={{
                borderWidth: 1,
                borderRadius: 10,
                width: 320,
                height: 50,
              }}
            />
          </View>
          <View>
            <Button
              onPress={() =>
                navigation.navigate("API_Screen_02", { newJob: job })
              }
              title={"FINISH"}
              iconPosition="right"
              icon={
                <EvilIcons
                  name="arrow-right"
                  size={24}
                  color="white"
                  style={{ paddingLeft: 10 }}
                />
              }
              buttonStyle={{
                width: 200,
                height: 50,
                padding: 10,
                borderRadius: 25,
              }}
            />
          </View>
          <View>
            <Image
              source={require("../assets/Image95.png")}
              style={{ width: 190, height: 190 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

import * as React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import API_Screen_01 from "./components/API_Screen_01";
import API_Screen_02 from "./components/API_Screen_02";
import API_Screen_03 from "./components/API_Screen_03";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="API_Screen_01"
          component={API_Screen_01}
          options={{ headerShown: false, title: "API Screen 01" }}
        />
        <Stack.Screen
          name="API_Screen_02"
          component={API_Screen_02}
          options={{
            title: "API Screen 02",
            headerShown: false,
            // headerTitle: "",
            // headerStyle: { backgroundColor: "", borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen
          name="API_Screen_03"
          component={API_Screen_03}
          options={{
            title: "API_Screen_03",
            headerShown: false,
            // headerTitle: "",
            // headerStyle: { backgroundColor: "", borderBottomWidth: 0 },
            // headerRight: () => <Icon name="arrow" size={30} color="black" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

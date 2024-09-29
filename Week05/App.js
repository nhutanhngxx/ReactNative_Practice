import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Card } from "react-native-paper";

import Telephone from "./components/Telephone";
import Color from "./components/Color";
import ColorDetail from "./components/ColorDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Telephone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Color"
          component={Color}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ColorDetail"
          component={ColorDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

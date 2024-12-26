import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

import LaunchScreen from "./components/LaunchScreen";
import ScreenProducts from "./components/ScreenProducts";
import ProductDetail from "./components/ProductDetail";
import Carts from "./components/Carts";
import Store from "./redux/Store";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="ScreenProducts" component={ScreenProducts} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Carts" component={Carts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

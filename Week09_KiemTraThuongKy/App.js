import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';
import CartScreen from './components/CartScreen';
import Icon from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen01" component={Screen01} />
          <Stack.Screen name="Screen02" component={Screen02} />
          <Stack.Screen name="Screen03" component={Screen03} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

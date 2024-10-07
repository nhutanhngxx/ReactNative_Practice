import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  View,
} from "react-native";

import useInput from "./hook/UseInput";
import useFetch from "./hook/UseFetch";

function App() {
  const input = useInput("");
  const { data, loading, error } = useFetch(
    "https://dog.ceo/api/breeds/image/random"
  );
  if (loading) return <ActivityIndicator />;
  if (error) return;
  <Text>Error: {error.message}</Text>;
  return (
    <SafeAreaView style={styles.container}>
      {/* Use Input */}
      {/* <TextInput
        value={input.value}
        onChangeText={input.onChangeText}
        placeholder="Type something..."
        style={styles.input}
      />
      <Text style={styles.input}>Value just entered: {input.value}</Text> */}
      {/* Use Fetch */}
      return (
      <View>
        {data && data.map((item) => <Text key={item.id}>{item.status}</Text>)}
      </View>
      )
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 20,
  },
  // Use Input
  // input: {
  //   borderWidth: 1,
  //   height: 50,
  //   width: "80%",
  //   padding: 20,
  //   borderRadius: 25,
  //   justifyContent: "center",
  // },
});

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

export default function CartScreen() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.uri} style={{ width: 50, height: 45 }} />
              <View>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Price: {item.price}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  empty: {
    fontSize: 18,
    color: 'grey',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    gap: 20
  },
});

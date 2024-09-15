import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F9F0F0',
  },
  h1:{
    alignItems: 'center',
    padding: 30,
  },
  typeEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    margin: 20,
    backgroundColor: '#C4C4C4',
  },
  button: {
    width: '90%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
});
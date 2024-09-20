import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F9F0F0',
  },
  h2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputCode: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  typeCode: {
    flexDirection: 'row',
    paddingBottom: 20,
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
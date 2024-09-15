import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00CCF9',
    },
    circle: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 150,
      margin: 100,
      borderRadius: 100,
      backgroundColor: '#000000'
    },
    circleSmall: {
      backgroundColor: '#00CCF9',
      borderRadius: 100,
      width: '80%',
      height: '80%',
    },
    text1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 50,
    },
    content1: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    content2: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    button: {
      padding: 20,
      width: '70%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    }
  });
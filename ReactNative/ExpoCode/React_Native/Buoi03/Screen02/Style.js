import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#00CCF9',
    },
    circle: {
      // flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 150,
      margin: 50,
      borderRadius: 100,
      backgroundColor: '#000000'
    },
    circleSmall: {
      backgroundColor: '#C7F4F6',
      borderRadius: 100,
      width: '80%',
      height: '80%',
    },
    text1: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text2: {
      // flex: 1,
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

    containerButton: {
      width: '75%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    button: {
      backgroundColor: '#E3C000',
      paddingVertical: 10,
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    signupButton: {
      backgroundColor: '#E3C000',
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
    },

    question: {
      justifyContent: 'center',
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    }
  });
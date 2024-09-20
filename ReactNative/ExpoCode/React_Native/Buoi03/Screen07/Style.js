import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FBCB00',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold", 
        marginTop: 80, 
        marginBottom: 50,
    },
    type: {
        width: '80%',
        height: 50,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 20,
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    }
});
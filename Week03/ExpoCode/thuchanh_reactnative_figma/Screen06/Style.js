import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    h1: {
        marginTop: 60,
        marginBottom: 30,
    },
    type: {
        width: "80%",
    },

    input: {
        height: 50,
        marginTop: 5,
        marginBottom: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    inputPassword: {
        width: "100%",
        height: 50,
        marginBottom: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    buttonRegister: {
        width: "80%",
        marginTop: 20,
        marginBottom: 20,
    },
    radioButtons: {
        flexDirection: "row",
        width: "50%",
        marginTop: 20,
        marginBottom: 20,
    }
});
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
    typeEmail: {
        width: "80%",
    },
    typePassword: {
        width: "80%",
        flexDirection: "row",
    },
    inputEmail: {
        height: 50,
        marginTop: 15,
        marginBottom: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    inputPassword: {
        width: "100%",
        height: 50,
        marginBottom: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    buttonLogin: {
        width: "80%",
        marginTop: 20,
        marginBottom: 20,
    },
    buttons: {
        flexDirection: "row",
        height: 45,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
});
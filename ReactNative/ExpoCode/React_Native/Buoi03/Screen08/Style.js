import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    eyeball: {
        margin: 20,
    },
    type: {
        width: '80%',

    },
    buttonLogin: {
        width: '80%',
        paddingTop: 20,
        paddingBottom: 20
    },
    buttonEvent: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },
    other: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'blue',
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        color: 'black',
    },
    buttons: {
        width: '80%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 20
    },
    button: {
    }
});

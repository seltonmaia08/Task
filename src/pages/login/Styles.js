import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //General styles
    contain: {
        flex: 1,
        padding: 10,
        backgroundColor: '#313131',
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    },

    text: {
        color: "#fff",
        letterSpacing: 2,
        left: 10,
        marginBottom: 10
    },
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '70%',
        position: 'absolute',
        top: 400,
        height: 400
    },
    input: {
        color: "#fff",
        letterSpacing: 2,
        marginBottom: 10,
        height: 40,
        borderBottomColor: "#A02B2B",
        borderBottomWidth: 2,
    },
    btn_text: {
        color: "#fff",
        letterSpacing: 2,
    },
    logo: {
        width: 250,
        height: 200,
        position: 'absolute',
        top: 100
    },
    title: {
        position: 'absolute',
        top: 320,
        letterSpacing: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff' 
    },

    //Styles for the login screen
    card_regsiter: {
        width: "100%",
        alignItems: "center",
        margin: 0,
        padding: 0,
        position: 'absolute',
        bottom: 0
    },

    btn_register: {
        width: "90%",
        backgroundColor: "#A02b2B",
        borderRadius: 50,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center'

    },

    btn_login: {
        width: "100%",
        backgroundColor: "#2a9e30",
        borderRadius: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_login_disabled: {
        width: "100%",
        backgroundColor: "#adadad",
        borderRadius: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    //Styles for the register screen


})

export default styles
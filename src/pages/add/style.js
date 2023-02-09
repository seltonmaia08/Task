import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff",
        padding: 10,
    },
    card_add: {
        flex: 1,
        alignItems: 'center',
        top: 100

    },
    text_add: {
        color: "#000",
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    input_add: {
        borderBottomWidth: 2,
        borderBottomColor: "#A02B2B",
        width: "90%",
        marginBottom: 50,
        color: "#000",
        fontSize: 20
    },
    btn_add_task: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#A02B2B',
        borderRadius: 50,
        position: 'absolute',
        bottom: 200,
        right: 40
    }
})

export default style
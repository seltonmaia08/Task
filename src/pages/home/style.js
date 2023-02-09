import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff",
        padding: 10,
    },
    card_message: {
        width: '100%',
        height: 500,
        position: 'absolute',
        top: 400,
    },
    btn_add: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#A02B2B',
        borderRadius: 50,
        position: 'absolute',
        bottom: 110,
        right: 40
    },
    btn_text: {
        color: '#fff',
        fontSize: 50,
    },

    item: {
        width: "80%",
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#A02B2B50",
        borderRadius: 50,
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        color: "#000",
        paddingLeft: 10
    },
    btn_iconCheck: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0
    },
    btn_iconTrash: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0
    },
    iconCheckmark: {
        color: "#2a9e30",
    },
    iconTrash: {
        color: "#A02B2B",
    },
    card_item: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%"

    }
})

export default style
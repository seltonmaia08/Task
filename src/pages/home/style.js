import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff",
        padding: 0,
    },
    card_message: {
        width: '100%',
        height: 500,
        position: 'absolute',
        bottom: -10,
    },
    btn_add: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#A02B2B',
        borderRadius: 50,
        position: 'absolute',
        bottom: 80,
        right: 30,
    },
    btn_text: {
        color: '#fff',
        fontSize: 50,
    },

    item: {
        width: "85%",
        height: 60,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "#A02B2B50",
        borderRadius: 50,
        marginBottom: 10,
        left: 20,
        justifyContent: 'space-between',
        padding: 5
    },
    title: {
        fontSize: 18,
        color: "#000",
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
    card_item: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
    },
      menu: {
        width: "100%",
        padding: 15,
        textAlign: 'center',
        backgroundColor: "#31313150",
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 1
      },
      btn: {
        width: "10%",
      },
})


export default style
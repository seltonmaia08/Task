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
        top: 100,

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
        width: "80%",
        marginBottom: 50,
        color: "#000",
        fontSize: 20
    },
    input_date: {
        borderBottomWidth: 2,
        borderBottomColor: "#A02B2B",
        width: "90%",
        paddingBottom: 10,
        color: "#000",
        fontSize: 20,
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
        right: 40,
    },
    data_task: {
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_data: {
        position: 'absolute',
        right: 0
    },
    btn_time: {
        position: 'absolute',
        right: 0
    },
    card_datas: {
        width: "80%",
        flexDirection: 'row',
    },
    date: {
        width: "50%",
    },
    time: {
        width: "50%",
        paddingLeft: 10
    }
})

export default style
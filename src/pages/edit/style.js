import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff",
        padding: 10,
    },
    card_edit: {
        flex: 1,
        alignItems: 'center',
        top: 100,

    },
    text_edit: {
        color: "#000",
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    input_edit: {
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
    btn_edit_task: {
        width: '90%',
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#2a9e30',
        borderRadius: 50,
        position: 'absolute',
        top: 200,
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
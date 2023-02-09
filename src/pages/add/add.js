import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";
import DB from '../../services/fireConfig'
import {  collection, addDoc } from "firebase/firestore";

const Add = ({ navigation, route }) => {

    const [add_task, setAdd_task] = useState('')
    const idUser = route.params.id
    const db = DB.store
    const [c, setC] =useState(0)

    const add = () => {
        addDoc(collection(db, idUser), {
            title: add_task,
            status_task: false,
        })
        navigation.navigate('Home', {id: idUser})
        console.log(c)
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.contain}>
            <View style={style.card_add}>
                <Text style={style.text_add}>Add new task!</Text>
                <TextInput
                    style={style.input_add}
                    keyboardType="default"
                    onChangeText={t => setAdd_task(t)}
                    value={add_task} />
                <TouchableOpacity
                    style={style.btn_add_task}
                    onPress={() => add()}>
                    <Ionicons name="checkmark" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Add
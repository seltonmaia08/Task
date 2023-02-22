import react, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";
import DB from '../../services/fireConfig'
import { collection, doc, setDoc, update, updateDoc   } from "firebase/firestore";
import DateTimePicker from '@react-native-community/datetimepicker';

const Edit = ({ navigation, route, }) => {


    const idUser = route.params.id
    const db = DB.store
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(route.params.title)
    const [date_t, setDate_t] = useState(route.params.date)
    const [time, setTime] = useState(route.params.time)
    const id_t = route.params.id_t

    const edit = () => {
        setDoc(doc(db, 'Task_' + idUser, id_t), {
            title: title,
            date: date_t,
            time: time
        })
        navigation.navigate('Home', { id: idUser })
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

        const d = new Date(currentDate)
        const newDate = `${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}` + '/' + `${d.getMonth() < 10 ? '0' + (d.getMonth()+1) : d.getMonth()}` + '/' + d.getFullYear()
        const newHour = `${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}` + ':' + `${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`
        setDate_t(newDate)
        setTime(newHour)

        console.log(newDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.contain}>
            <View style={style.card_edit}>
                <Text style={style.text_edit}>Update task!</Text>
                <View style={style.data_task}>
                    <TextInput
                        style={style.input_edit}
                        keyboardType="default"
                        onChangeText={t => setTitle(t)}
                        value={title} />
                    <View style={style.card_datas}>
                        <View style={style.date}>
                            <TextInput
                                style={style.input_date}
                                keyboardType="default"
                                value={date_t} />
                            <TouchableOpacity
                                style={style.btn_data}
                                onPress={() => showMode('date')}>
                                <Ionicons name="calendar-outline" size={30} color="#a02b2b" />
                            </TouchableOpacity>
                        </View>
                        <View style={style.time}>
                            <TextInput
                                style={style.input_date}
                                keyboardType="default"
                                value={time} />
                            <TouchableOpacity
                                style={style.btn_time}
                                onPress={() => showMode('time')}>
                                <Ionicons name="stopwatch-outline" size={30} color="#a02b2b" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )
                    }
                </View>
                <TouchableOpacity
                    style={style.btn_edit_task}
                    onPress={() => edit()}>
                    <Ionicons name="checkmark" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Edit
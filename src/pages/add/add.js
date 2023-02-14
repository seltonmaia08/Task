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
import { collection, addDoc } from "firebase/firestore";
import DateTimePicker from '@react-native-community/datetimepicker';

const Add = ({ navigation, route, }) => {


    const [add_task, setAdd_task] = useState('')
    const idUser = route.params.id
    const db = DB.store
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState('')
    const [textTime, setTextTime] = useState('')

    const add = () => {
        addDoc(collection(db, 'Task_' + idUser), {
            title: add_task,
            status_task: false,
            date: textDate,
            time: textTime
        })
        navigation.navigate('Home', { id: idUser })
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

        const d = new Date(currentDate)
        const newDate = `${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}` + '/' + `${d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()}` + '/' + d.getFullYear()
        const newHour = `${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}` + ':' + `${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`
        setTextDate(newDate)
        setTextTime(newHour)

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
            <View style={style.card_add}>
                <Text style={style.text_add}>Add new task!</Text>
                <View style={style.data_task}>
                    <TextInput
                        style={style.input_add}
                        keyboardType="default"
                        onChangeText={t => setAdd_task(t)}
                        value={add_task} />
                    <View style={style.card_datas}>
                        <View style={style.date}>
                            <TextInput
                                style={style.input_date}
                                keyboardType="default"
                                value={textDate} />
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
                                value={textTime} />
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
                    style={style.btn_add_task}
                    onPress={() => add()}>
                    <Ionicons name="checkmark" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Add
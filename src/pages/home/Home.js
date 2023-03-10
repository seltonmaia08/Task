import react, { useEffect, useState } from "react";
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import style from "./style";
import DB from '../../services/fireConfig'
import { onSnapshot, collection, deleteDoc, doc, } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation, route }) => {

    const [task, setTask] = useState([''])
    const idUser = route.params.id
    const db = DB.store
  
    //reading database
    useEffect(() => {
        const d = onSnapshot(collection(db, 'Task_' + idUser), (query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])
    const taskDone = (id) => {
        deleteDoc(doc(db, 'Task_' + idUser, id))
    }
    const Item = ({ title, date, time }) => {
        return (
            <View style={style.item}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.title}>{"Day: " + date + '  ' + "Time: " + time}</Text>
            </View >
        )
    };
    const renderItem = ({ item }) => {
        return (
            <View
                style={style.card_item}>
                <TouchableOpacity
                    onPress={() => taskDone(item.id)}
                    style={style.btn_iconCheck}>
                    <Ionicons style={style.iconCheckmark} name="checkmark" size={30} color="#2a9e30" />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', marginLeft: 50 }}
                    onPress={() => navigation.navigate('Edit', {
                        id_t: item.id,
                        title: item.title,
                        date: item.date,
                        time: item.time,
                        state: item.state,
                        id: idUser
                    })}>
                    <Item title={item.title} date={item.date} time={item.time} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={style.contain}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={style.contain}>
                {
                    task.length == 0
                        ?
                        <View style={style.card_message}>
                            <ImageBackground
                                source={require('../../../assets/img/bgHome.png')}
                                resizeMode={'contain'}
                                style={{ flex: 1 }}>
                            </ImageBackground>
                        </View>
                        :
                        <FlatList style={{top: 20}}
                            data={task}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                }
                <TouchableOpacity
                    style={style.btn_add}
                    onPress={() => navigation.navigate('Add', { id: idUser })}>
                    <Text style={style.btn_text}>+</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}
export default Home
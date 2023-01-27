import react, { useEffect, useState } from "react";
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    FlatList
} from "react-native";
import style from "./style";
import DB from '../../services/fireConfig'
import { query, onSnapshot, collection } from "firebase/firestore";
const Home = ({ navigation, route }) => {

    const [task, setTask] = useState([])
    const idUser = route.params.id
    console.log("USER ID: " + idUser)

    const db = DB.store

    useEffect(() => {
        const q = query(collection(db, 'task'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const list = []
            snapshot.docChanges().forEach((change) => {
                list.push({ ...change.doc.data(), id: change.doc.id })
            })
            setTask(list)
            console.log(list)
        })
    }, [])

    const Item = ({ title }) => (
        <View style={style.item}>
            <Text style={style.title}>{title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {
                    task === []
                        ?
                        <View style={style.card_message}>
                            <ImageBackground
                                source={require('../../../assets/img/bgHome.png')}
                                resizeMode={'contain'}
                                style={{ flex: 1 }}>
                            </ImageBackground>
                        </View>
                        :
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={task}
                            renderItem={({ item }) => <Item title={item.title} />}
                            keyExtractor={item => item.id}
                        />
                }
                <TouchableOpacity style={style.btn_add}>
                    <Text style={style.btn_text}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home
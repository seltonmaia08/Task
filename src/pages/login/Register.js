import react, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
} from "react-native";
import { initializeApp } from "../../services/fireConfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";
import style from './styles'

const Register = ({ navigation }) => {

    const logo = require('../../../assets/img/logo.png')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [viewPass, setViewPass] = useState(true)

    const view_pass = (p) => {
        setViewPass(p)
    }

    const register = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate('Login')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.contain}>
            <ImageBackground style={style.logo} source={logo} resizeMode={'cover'}></ImageBackground>
            <Text style={style.title}>REGISTER</Text>
            <View style={style.card}>
                <Text style={style.text}>
                    E-mail
                </Text>
                <TextInput
                    style={style.input}
                    keyboardAppearance="email"
                    onChangeText={t => setEmail(t)}
                    value={email} />
                <Text style={style.text}>Password</Text>
                <View>
                    <TextInput
                        style={style.input}
                        keyboardType="default"
                        secureTextEntry={viewPass}
                        onChangeText={t => setPassword(t)}
                        value={password} />
                    <TouchableOpacity
                        style={style.btn_eye}
                        onPress={() => view_pass(!viewPass)}>
                        <Ionicons name={viewPass === true ? "eye-off" : "eye"} size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                {
                    email === '' || password === ''
                        ?
                        <TouchableOpacity
                            style={style.btn_login_disabled}
                            disabled={false}>
                            <Text style={style.btn_text}>Register</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={style.btn_login}
                            onPress={() => register()}>
                            <Text style={style.btn_text}>Register</Text>
                        </TouchableOpacity>
                }
            </View>

        </KeyboardAvoidingView>
    )
}

export default Register
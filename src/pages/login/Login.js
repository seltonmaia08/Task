import react, { useEffect, useState } from "react";
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
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";

import style from './styles'
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {

    const logo = require('../../../assets/img/logo.png')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [viewPass, setViewPass] = useState(true)
    const [error, setError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
       const auth = getAuth()
       const user = auth.currentUser
       if(user){
        navigation.navigate("Home", {idUser: user.uid})
       }
    }, [])

    const login = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user.uid;
                navigation.navigate('Home', { id: user })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode)
            });
    }

    const view_pass = (p) => {
        setViewPass(p)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.contain}>
            {
                error != ''
                ?
                <View style={style.card_error}>
                    <Ionicons name="alert-circle" size={40} color="#fff" />
                    <Text style={style.text_error}>Invalid email or passwor, Try again...</Text>
                </View>
                : null
            }
            <ImageBackground style={style.logo} source={logo} resizeMode={'cover'}></ImageBackground>
            <Text style={style.title}>LOGIN</Text>
            <View style={style.card}>
                <Text style={style.text}>
                    <Ionicons name="mail" size={20} color="#a02b2b" />
                    E-mail
                </Text>
                <TextInput
                    style={style.input}
                    keyboardType="email"
                    onChangeText={t => setEmail(t)}
                    value={email} />
                <Text style={style.text}>
                    <Ionicons name="key" size={20} color="#a02b2b" />
                    Password
                </Text>
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
                            <Text style={style.btn_text}>Login</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={style.btn_login}
                            onPress={() => login()}>
                            <Text style={style.btn_text}>Login</Text>
                        </TouchableOpacity>
                }
                <View style={style.card_regsiter}>
                    <Text style={style.text}>
                        Don't have an account yet?
                    </Text>
                    <TouchableOpacity
                        style={style.btn_register}
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={style.btn_text}>Register now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default Login
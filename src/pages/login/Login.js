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
    signInWithEmailAndPassword,
} from "firebase/auth";

import Style from './Styles'

const Login = ({ navigation }) => {

    const logo = require('../../../assets/img/logo.png')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        console.log(email, password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user.uid;
                navigation.navigate('Home', {id: user})
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
            style={Style.contain}>
            <ImageBackground style={Style.logo} source={logo} resizeMode={'cover'}></ImageBackground>
            <Text style={Style.title}>LOGIN</Text>
            <View style={Style.card}>
                <Text style={Style.text}>
                    E-mail
                </Text>
                <TextInput
                    style={Style.input}
                    keyboardAppearance="email"
                    onChangeText={t => setEmail(t)}
                    value={email} />
                <Text style={Style.text}>Password</Text>
                <TextInput
                    style={Style.input}
                    keyboardAppearance="default"
                    secureTextEntry={true}
                    onChangeText={t => setPassword(t)}
                    value={password} />
                {
                    email === '' || password === ''
                        ?
                        <TouchableOpacity
                            style={Style.btn_login_disabled}
                            disabled={false}>
                            <Text style={Style.btn_text}>Login</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={Style.btn_login}
                            onPress={() => login()}>
                            <Text style={Style.btn_text}>Login</Text>
                        </TouchableOpacity>
                }
                <View style={Style.card_regsiter}>
                    <Text style={Style.text}>
                        Don't have an account yet?
                    </Text>
                    <TouchableOpacity
                        style={Style.btn_register}
                    onPress={() => navigation.navigate('Register') }>
                        <Text style={Style.btn_text}>Register now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default Login
import AccountPage from "@/components/AccountPage";
import StyledBackground from "@/components/StyledBackground";
import { Colors, Fonts } from "@/constants/Style.data";
import { styles } from "@/styles/login.styles";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {

    const navigation = useRouter();
    const [resgister, setRegister] = useState(false);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const registerAccount = () => {
        setRegister(true);
    }

    const handleSubmit = () => {


        navigation.replace('/home');
    }

    return (
        <StyledBackground>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>SimpleTalk</Text>
                    <Text style={styles.subTitle}>Faça seu login!</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.inputBox}>
                        <Feather name="user" size={24} color="black" />
                        <TextInput placeholder="Username" style={styles.input} value={name} onChangeText={setName}></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <Feather name="lock" size={24} color="black" />
                        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} value={password} onChangeText={setPassword}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Não possui conta?</Text>
                    <TouchableOpacity onPress={registerAccount}>
                        <Text style={[styles.footerText, { color: Colors.secundary, fontFamily: Fonts.PoppinsBold }]}>Cadastre-se!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                visible={resgister}
                transparent={true}
                onRequestClose={() => setRegister(false)}
            >
                <AccountPage onClose={() => setRegister(false)} />
            </Modal>
        </StyledBackground>
    )

}
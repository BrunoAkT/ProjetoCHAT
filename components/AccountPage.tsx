import { Colors, Fonts } from "@/constants/Style.data";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";

export default function AccountPage({ onClose }: { onClose: () => void }) {

    const navigation = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [image, setImage] = useState<string | null>(null);

    const [stepRegistration, setStepRegistration] = useState(1);

    const nextStepRegistration = () => {
        // if (!name || !email || !password || !confirmPassword) {
        //     alert("Por favor, preencha todos os campos.");
        //     return;
        // }
        // if (password !== confirmPassword) {
        //     alert("As senhas não coincidem!");
        //     return;
        // }

        setStepRegistration(2);
    }

    const selectImage = async () => {
        const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissions.granted === false) {
            alert("Permissão para acessar a galeria é necessária!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }

    }

    const handleSubmit = () => {
        if (!image) {
            setImage(null);
        }
        alert("Conta criada com sucesso!");
        navigation.replace('/home');
    }

    return (
        <View style={styles.container}>
            {stepRegistration === 1 &&
                <View style={{ width: '100%', flex: 1 }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Crie sua Conta</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                        <View style={styles.inputBox}>
                            <Feather name="user" size={24} color="black" />
                            <TextInput placeholder="Nome" style={styles.input} value={name} onChangeText={setName}></TextInput>
                        </View>
                        <View style={styles.inputBox}>
                            <Feather name="mail" size={24} color="black" />
                            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                        </View>
                        <View style={styles.inputBox}>
                            <Feather name="lock" size={24} color="black" />
                            <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} value={password} onChangeText={setPassword}></TextInput>
                        </View>
                        <View style={styles.inputBox}>
                            <Feather name="lock" size={24} color="black" />
                            <TextInput placeholder="Confirme a sua senha" secureTextEntry={true} style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.registerButton} onPress={nextStepRegistration}>
                            <Text style={styles.text}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            }

            {stepRegistration === 2 &&
                <View style={[styles.body, { flex: 1, gap: 20 }]}>
                    <TouchableOpacity onPress={() => setStepRegistration(1)} style={styles.backButton}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Escolha sua foto</Text>
                    {image ?
                        <TouchableOpacity onPress={selectImage}>
                            <Image source={{ uri: image }} style={styles.imagePicker} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
                            <Feather name="camera" size={40} color={Colors.textSecondary} />
                        </TouchableOpacity>}

                    <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                        <Text style={styles.text}>Concluir Cadastro</Text>
                    </TouchableOpacity>
                </View>
            }

            <View style={styles.footer}>
                <Text style={styles.footerText}>Ja possui conta?</Text>
                <TouchableOpacity onPress={() => { onClose() }}>
                    <Text style={[styles.footerText, { color: Colors.secundary, fontFamily: Fonts.PoppinsBold }]}>Faça seu Login!</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 20,
        margin: 10,
        padding: 20,
    },
    body: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    footer: {
        flexDirection: 'row',
        gap: 5,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: 'black',
        fontFamily: Fonts.PoppinsRegular
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        width: '80%',
        padding: 5,
        marginBottom: 20,
    },
    input: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 16,
        width: '90%'
    },
    registerButton: {
        padding: 10,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: Colors.textPrimary,
        borderWidth: 1,
    },
    text: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 18,
        color: Colors.textPrimary
    },
    header: {
        margin: 20,
        justifyContent: 'center',
        height: 60,
        flexGrow: 1,
    },
    headerText: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 24,
        color: Colors.textPrimary
    },
    imagePicker: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    }
})
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors, Fonts } from "@/constants/Style.data";

export default function AccountPage({ onClose }: { onClose: () => void }) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.inputBox}>
                    <Feather name="user" size={24} color="black" />
                    <TextInput placeholder="Username" style={styles.input}></TextInput>
                </View>
                <View style={styles.inputBox}>
                    <Feather name="lock" size={24} color="black" />
                    <TextInput placeholder="Password" secureTextEntry={true} style={styles.input}></TextInput>
                </View>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.text}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Ja possui conta?</Text>
                <TouchableOpacity onPress={() => { onClose() }}>
                    <Text style={[styles.footerText, { color: Colors.secundary, fontFamily: Fonts.PoppinsBold }]}>Faça seu Login!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 20,
        margin: 20,
        padding: 20,
    },
    body: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 180,
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
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 18,
        color: Colors.textPrimary
    },
})
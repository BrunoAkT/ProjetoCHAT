import { Fonts } from "@/constants/Style.data";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ContactBox() {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push("/chat")}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.avatar}>
                    <Text>Avatar</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.textName}>Name</Text>
                    <Text style={styles.text}>Last Message</Text>
                </View>
            </View>
            <View style={styles.status}>
                <Text>O</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: Fonts.PoppinsRegular,
    },
    textName: {
        fontFamily: Fonts.PoppinsBold,
        fontSize: 18,
    },
    avatar: {
        borderWidth: 1,
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    info: {
    },
    status: {

    }
})
import { Colors, Fonts } from "@/constants/Style.data";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ContactBox() {
    const router = useRouter();

    const [status, setStatus] = useState("Online");

    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push("/chat")}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.avatar}>
                    <Text>Avatar</Text>
                    {
                        status === "Online" ?
                            <View style={styles.statusOptionOn}></View>
                            : <View style={styles.statusOptionOff}></View>
                    }
                </View>

                <View style={styles.info}>
                    <Text style={styles.textName}>Name</Text>
                    <Text style={styles.text}>Last Message</Text>
                </View>
            </View>
            <View style={styles.notificationBox}>
                <Text style={styles.text}>1</Text>
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
        fontSize: 15,
        lineHeight: 15,
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
    statusOptionOn: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: Colors.green,
        marginRight: 10,
        position: 'absolute',
        right: -10,
        bottom: 0,
    },
    statusOptionOff: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: Colors.red,
        marginRight: 10,
        position: 'absolute',
        right: -10,
        bottom: 0,
    },
    info: {

    },
    notificationBox: {
        backgroundColor: Colors.white,
        width: 25,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
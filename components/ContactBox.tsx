import { Colors, Fonts } from "@/constants/Style.data";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Contacts {
    id: number,
    name: string,
    lastMessage: string,
    time: string,
    image?: string,
    status: string,
}


export default function ContactBox({ contact }: { contact: Contacts }) {
    const router = useRouter();


    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push({ pathname: "/chat", params: { contactId: contact.id } })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                <View style={styles.avatar}>
                    <Text>Avatar</Text>
                    {
                        contact.status === "online" ?
                            <View style={styles.statusOptionOn}></View>
                            : <View style={styles.statusOptionOff}></View>
                    }
                </View>

                <View style={styles.info}>
                    <Text style={styles.textName} numberOfLines={1}>{contact.name}</Text>
                    <Text style={styles.text} numberOfLines={1}>{contact.lastMessage}</Text>
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
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 13,
        lineHeight: 13,
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
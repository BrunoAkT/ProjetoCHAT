import { Colors, Fonts } from "@/constants/Style.data";
import { useAuth } from "@/context/auth";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface NewContacts {
    _id: number,
    name: string,
    username: string,
    status: string,
    avatarUrl?: string,
}


export default function NewUserBox({ contact }: { contact: NewContacts }) {
    const router = useRouter();
    const { user } = useAuth();

    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            contact.username !== user.username &&
            router.push({ pathname: "/chat", params: { contactId: contact._id } })
             }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                <View style={styles.avatar}>
                    <Image source={contact.avatarUrl ? { uri: contact.avatarUrl } : require('../assets/default-avatar.jpg')} style={{ width: 70, height: 70, borderRadius: 50 }} />
                    {
                        contact.status === "online" ?
                            <View style={styles.statusOptionOn}></View>
                            : <View style={styles.statusOptionOff}></View>
                    }
                </View>

                <View style={styles.info}>
                    <Text style={styles.textName} numberOfLines={1}>{contact.name}</Text>
                </View>
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
        backgroundColor: Colors.whiteOFF,
        borderRadius: 5,
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
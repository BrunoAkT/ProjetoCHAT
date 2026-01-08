import { Colors, Fonts } from "@/constants/Style.data";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Conversation {
    _id: string;
    lastMessage: {
        text: string;
        createdAt: string;
        senderId: string;
    };
    otherParticipant: {
        _id: string;
        name: string;
        status: string;
        avatarUrl?: string;
    };
}


export default function ContactBox({ contact }: { contact: Conversation }) {
    const router = useRouter();


    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push({ pathname: "/chat", params: { contactId: contact.otherParticipant._id, conversationId: contact._id } })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                <View style={styles.avatar}>
                    <Image
                        source={contact.otherParticipant.avatarUrl ? { uri: contact.otherParticipant.avatarUrl } : require('../assets/default-avatar.jpg')}
                        style={{ width: 68, height: 68, borderRadius: 34 }}
                    />
                    {
                        contact.otherParticipant.status === "online" ?
                            <View style={styles.statusOptionOn}></View>
                            : <View style={styles.statusOptionOff}></View>
                    }
                </View>

                <View style={styles.info}>
                    <Text style={styles.textName} numberOfLines={1}>{contact.otherParticipant.name}</Text>
                    {
                        contact.lastMessage.senderId == contact.otherParticipant._id ? (
                            <Text style={styles.text} numberOfLines={1}>{contact.lastMessage.text}</Text>
                        ) : (
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                <Feather name="check" size={14} color={Colors.textPrimary} />
                                <Text style={styles.text} numberOfLines={1}>{contact.lastMessage.text}</Text>
                                </View>)
                    }
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
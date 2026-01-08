import { Colors, Fonts } from "@/constants/Style.data";
import { useAuth } from "@/context/auth";
import { Feather } from "@expo/vector-icons";
import { JSX } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Message {
    text: string;
    createdAt?: string;
    senderId?: number;
    type?: string;
}

export default function MessageBox({ value }: { value: Message }): JSX.Element {

    const { user } = useAuth();

    const userIDLocal = user._id;
    const isCurrentUser = userIDLocal === value.senderId;


    const localTime = value.createdAt
        ? new Date(value.createdAt).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Sao_Paulo',
        })
        : '';

    return (
        value.type === "file" ? (
            <View style={[styles.wrapper, isCurrentUser ? styles.wrapperCurrentUser : styles.wrapperOtherUser]}>
                <View style={[styles.container, isCurrentUser ? { ...styles.containerCurrentUser, backgroundColor: Colors.secundary, flexDirection: 'row', alignItems: 'center', gap: 10 } : { ...styles.containerOtherUser, backgroundColor: Colors.secundary, flexDirection: 'row', alignItems: 'center', gap: 10 }]}>
                    <Feather name="file" size={30} color={Colors.white} />
                    <View>
                        <Text style={{ fontFamily: Fonts.PoppinsRegular, color: Colors.white }}>{value.text}</Text>
                        {/* {value.size && <Text style={{ fontFamily: Fonts.PoppinsBold, color: Colors.white, fontSize: 12 }}>{(value.size / 1024).toFixed(2)} KB</Text>} */}
                    </View>
                    <TouchableOpacity style={{ marginLeft: 'auto' }}>
                        <Feather name="download" size={24} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textSub}>{localTime}</Text>
                </View>
            </View>
        ) :

            <View style={[styles.wrapper, isCurrentUser ? styles.wrapperCurrentUser : styles.wrapperOtherUser]}>
                <View style={[styles.container, isCurrentUser ? styles.containerCurrentUser : styles.containerOtherUser]}>
                    <Text style={[styles.text, isCurrentUser ? styles.textCurrentUser : styles.textOtherUser]}>
                        {value.text}
                    </Text>
                </View>
                <View>
                    <Text style={styles.textSub}>{localTime}</Text>
                </View>
            </View>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    wrapperCurrentUser: {
        alignItems: 'flex-end',
    },
    wrapperOtherUser: {
        alignItems: 'flex-start',
    },
    container: {
        padding: 10,
        maxWidth: '80%',
        borderRadius: 10,
    },
    containerCurrentUser: {
        backgroundColor: Colors.white,
        borderBottomRightRadius: 0,
    },
    containerOtherUser: {
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 0,
    },
    text: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 14,
        lineHeight: 20,
        flexWrap: 'wrap',
    },
    textCurrentUser: {
        color: Colors.textPrimary,
    },
    textOtherUser: {
        color: Colors.textPrimary,
    },
    textSub: {
        fontFamily: Fonts.PoppinsRegular,
        color: Colors.textSecondary,
        fontSize: 12,
        margin: 5,
    }
})
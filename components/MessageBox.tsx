import { Colors, Fonts } from "@/constants/Style.data";
import { JSX } from "react";
import { StyleSheet, Text, View } from "react-native";


interface Message {
    stringMessage: string;
    timeMessage?: string;
    userID?: number;
}

export default function MessageBox({stringMessage, timeMessage, userID}: Message): JSX.Element {

    const userIDLocal = 1
    const isCurrentUser = userIDLocal === userID;

    return (
        <View style={[styles.wrapper, isCurrentUser ? styles.wrapperCurrentUser : styles.wrapperOtherUser]}>
            <View style={[styles.container, isCurrentUser ? styles.containerCurrentUser : styles.containerOtherUser]}>
                <Text style={[styles.text, isCurrentUser ? styles.textCurrentUser : styles.textOtherUser]}>{stringMessage}</Text>
            </View>
            <View>
                <Text style={styles.textSub}>{timeMessage}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    wrapperCurrentUser: {
        alignItems:'flex-end',
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
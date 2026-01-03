import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@/constants/Style.data";


export const styles = StyleSheet.create({
    header: {
        margin: 30,
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.PoppinsBold,
    },
    headerRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: Fonts.PoppinsRegular,
        color: Colors.textPrimary,
        fontSize: 26,
    },
    content: {
        backgroundColor: Colors.primaryOFF,
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        paddingTop: 50,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'flex-end',
        paddingVertical: 40,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileButton: {
        backgroundColor: Colors.whiteOFF,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        elevation: 5,
    },
    input: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 16,
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        textAlign: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    addPersonButton: {
        backgroundColor: Colors.textPrimary,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        elevation: 5,
    },
    modalBackground: {
        flex: 1,
    },
    modalContent: {
        backgroundColor: Colors.primaryOFF,
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        paddingTop: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: "35%",
    },
    inputUserBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        elevation: 5,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    inputUser: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 16,
        alignItems: 'center',
        width: '90%'
    },
    subTitle: {
        fontSize: 16,
        fontFamily: Fonts.PoppinsRegular,
    },
})
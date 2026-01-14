import { Colors, Fonts } from "@/constants/Style.data";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        padding: 30,
        paddingBottom: 10,
    },
    title: {
        fontSize: 28,
        fontFamily: Fonts.PoppinsBold,
        color: Colors.textPrimary,
    },
    headerRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
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
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        gap: 15,
    },
    profileButton: {
        backgroundColor: Colors.whiteOFF,
        padding: 15,
        borderRadius: 50,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    input: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 16,
        elevation: 5,
        marginTop: 10,
    },
    addPersonButton: {
        backgroundColor: Colors.textPrimary,
        padding: 15,
        borderRadius: 50,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: Colors.primaryOFF,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        height: "40%",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    inputUserBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        elevation: 5,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginTop: 15,
    },
    inputUser: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 16,
        paddingVertical: 10,
        width: '90%'
    },
    subTitle: {
        fontSize: 16,
        fontFamily: Fonts.PoppinsRegular,
    },
    usersFound:{
        marginTop: 20,
        flex: 1,
    }
})
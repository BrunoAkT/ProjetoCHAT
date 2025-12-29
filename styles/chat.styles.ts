import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@/constants/Style.data";


export const styles = StyleSheet.create({
    header: {
        marginHorizontal: 30,
        marginBottom: 15,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
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
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 40,
        paddingBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    inputBox: {
        width: '90%',
        backgroundColor: Colors.white,
        height: 60,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        elevation: 5,
        gap: 5,
    },
    input: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 16,
        width: '80%',
    },
    avatarBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
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
        marginRight: 15,
    },
    info: {
        justifyContent: 'center',
    },
    statusBox:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusOptionOn: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: Colors.green,
        marginRight: 10,
    },
    statusOptionOff: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: Colors.red,
        marginRight: 10,
    },  
    
})
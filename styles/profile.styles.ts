import { Colors, Fonts } from "@/constants/Style.data";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    headerText: {
        fontFamily: Fonts.PoppinsBold,
        fontSize: 25,
    },
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 20,
        paddingTop: 40,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    avatarBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 18,
        lineHeight: 18,
    },
    textName: {
        fontFamily: Fonts.PoppinsBold,
        fontSize: 35,
        lineHeight: 35,
        color: '#000',
        width: 250,
        textAlign: 'center',
    },
    textNameEditing: {
        fontFamily: Fonts.PoppinsBold,
        fontSize: 35,
        lineHeight: 35,
        color: '#000',
        backgroundColor: Colors.grey,
        width: 250,
        textAlign: 'center',
        borderRadius: 10,
    },
    avatar: {
        borderWidth: 1,
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    nameEdit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    Edit: {
        position: 'absolute',
        right: 0,
    },
    status: {
        backgroundColor: Colors.green,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        marginTop: 10,
    },
    statusOff: {
        backgroundColor: Colors.red,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        marginTop: 10,
    },


    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusOption: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 5,
        width: 150,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.white,
        elevation: 10,
    },
    statusOptionOn: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.green,
        marginRight: 10,
    },
    statusOptionOff: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.red,
        marginRight: 10,
    },
    logoutButton:{
        borderWidth: 1,
        borderColor: Colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    logoutText: {
        fontFamily: Fonts.PoppinsBold,
        fontSize: 18,
        color: Colors.red,
    }
})
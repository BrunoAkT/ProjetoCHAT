import { Colors, Fonts } from "@/constants/Style.data";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        width: '80%',
        padding: 5,
        marginBottom: 20,
    },
    input: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 16,
        width: '90%'
    },
    loginButton: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 18,
        color: Colors.textPrimary
    },
    header: {
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 120,
        alignItems: 'flex-start',
        width: '100%',
    },
    body: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 180,
    },
    footer: {
        flexDirection: 'row',
        gap: 5,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: 'black',
        fontFamily: Fonts.PoppinsRegular
    },
    title: {
        fontFamily: Fonts.PoppinsBold,
        fontSize: 40,
        marginBottom: 5,
        color: Colors.textPrimary,
    },
    subTitle: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 20,
        marginBottom: 40,
        paddingLeft: 10,
        color: Colors.textPrimary,
    }
})
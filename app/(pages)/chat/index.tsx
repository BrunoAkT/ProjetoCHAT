import StyledBackground from "@/components/StyledBackground";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "@/styles/chat.styles";
import { Colors } from "@/constants/Style.data";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Chat() {
    const router = useRouter();

    const [status, setStatus] = useState("Online");


    return (
        <StyledBackground>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" >

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.avatarBox}>
                        <View style={styles.avatar}>
                            <Text>Avatar</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.textName}>Name</Text>
                            <View style={styles.statusBox}>
                                {
                                    status === "Online" ?
                                        <View style={styles.statusOptionOn}></View>
                                        : <View style={styles.statusOptionOff}></View>
                                }
                                <Text style={styles.text}>{status}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Feather name="more-vertical" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis aperiam neque. Necessitatibus, eos. Explicabo aliquid dolor esse rem optio, voluptate soluta ab, dolorum repellendus beatae consequuntur maiores illum doloribus?e</Text>
                            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis aperiam neque. Necessitatibus, eos. Explicabo aliquid dolor esse rem optio, voluptate soluta ab, dolorum repellendus beatae consequuntur maiores illum doloribus?e</Text>
                            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis aperiam neque. Necessitatibus, eos. Explicabo aliquid dolor esse rem optio, voluptate soluta ab, dolorum repellendus beatae consequuntur maiores illum doloribus?e</Text>
                            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis aperiam neque. Necessitatibus, eos. Explicabo aliquid dolor esse rem optio, voluptate soluta ab, dolorum repellendus beatae consequuntur maiores illum doloribus?e</Text>
                            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis aperiam neque. Necessitatibus, eos. Explicabo aliquid dolor esse rem optio, voluptate soluta ab, dolorum repellendus beatae consequuntur maiores illum doloribus?e</Text>
                            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis aperiam neque. Necessitatibus, eos. Explicabo aliquid dolor esse rem optio, voluptate soluta ab, dolorum repellendus beatae consequuntur maiores illum doloribus?e</Text>
                            <Text style={styles.text}>AAAAAAAAAAAAAAAAAAAAA</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <View style={styles.inputBox}>
                        <TouchableOpacity>
                            <Feather name="file-plus" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder="Type a message..." />
                        <TouchableOpacity>
                            <Feather name="send" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>

        </StyledBackground >);
}
import MessageBox from "@/components/MessageBox";
import StyledBackground from "@/components/StyledBackground";
import { Colors } from "@/constants/Style.data";
import { styles } from "@/styles/chat.styles";
import { Feather } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Keyboard, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";


interface Message {
    stringMessage: string;
    timeMessage?: string;
    userID?: number;
    file?: {
        name: string;
        uri: string;
        size?: number;
    }
}

export default function Chat() {
    const router = useRouter();

    const [status, setStatus] = useState("Online");
    const [userId, setUserId] = useState(1);


    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState("");


    // Estado para controlar a altura do padding inferior
    const [paddingBottom, setPaddingBottom] = useState(0);

    useEffect(() => {
        // Definir os nomes dos eventos dependendo da plataforma
        // iOS tem animação 'Will', Android geralmente funciona melhor com 'Did' ou 'Will' dependendo da versão
        const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

        const keyboardShowListener = Keyboard.addListener(showEvent, (e) => {
            // e.endCoordinates.height pega a altura exata do teclado
            setPaddingBottom((e.endCoordinates.height) + 20);
        });

        const keyboardHideListener = Keyboard.addListener(hideEvent, () => {
            setPaddingBottom(0); // Reseta para 0 quando fecha
        });

        return () => {
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        };
    }, []);


    const sendMessage = () => {
        if (inputMessage.trim() !== "") {
            const currentTime = new Date().toLocaleTimeString("br-BR", {
                timeZone: "America/Sao_Paulo",
                hour: "2-digit",
                minute: "2-digit",
            });
            setMessages([
                {
                    stringMessage: inputMessage,
                    timeMessage: currentTime,
                    userID: userId
                },
                ...messages
            ]);
            setInputMessage("");
        }
    }

    const sendFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            if (!result.canceled && result.assets) {
                const asset = result.assets[0];
                const currentTime = new Date().toLocaleTimeString("br-BR", {
                    timeZone: "America/Sao_Paulo",
                    hour: "2-digit",
                    minute: "2-digit",
                });

                const newFileMessage: Message = {
                    stringMessage: `Arquivo: ${asset.name}`,
                    timeMessage: currentTime,
                    userID: userId,
                    file: {
                        name: asset.name,
                        uri: asset.uri,
                        size: asset.size
                    }
                };

                setMessages([newFileMessage, ...messages]);
            }
        } catch (error) {
            console.error("Erro ao selecionar o arquivo:", error);
        }
    }

    return (
        <StyledBackground>

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
            <View style={{ flex: 1, paddingBottom: paddingBottom }}>
                <View style={styles.content}>
                    <FlatList
                        data={messages}
                        inverted
                        renderItem={({ item }) => (
                            <MessageBox stringMessage={item.stringMessage} timeMessage={item.timeMessage} userID={item.userID} file={item.file} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={{ ...styles.footer, paddingBottom: paddingBottom + 30 }}>
                    <View style={styles.inputBox}>
                        <TouchableOpacity onPress={sendFile}>
                            <Feather name="file-plus" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            placeholder="Type a message..."
                            value={inputMessage}
                            onChangeText={setInputMessage}
                        />
                        <TouchableOpacity onPress={sendMessage}>
                            <Feather name="send" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </StyledBackground >
    );

}
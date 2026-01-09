import MessageBox from "@/components/MessageBox";
import StyledBackground from "@/components/StyledBackground";
import api from "@/constants/api";
import { Colors } from "@/constants/Style.data";
import { useAuth } from "@/context/auth";
import { styles } from "@/styles/chat.styles";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Keyboard, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";


interface Message {
    text: string;
    createdAt?: string;
    senderId?: number;
    type?: string;
}

interface Friend {
    _id: number;
    name: string;
    status: string;
    avatarUrl?: string;
}

export default function Chat() {
    const router = useRouter();
    const { user } = useAuth();
    const { contactId, conversationId: initialConversationId } = useLocalSearchParams();

    const [friend, setFriend] = useState<Friend | null>(null);

    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState("");
    const [conversationId, setConversationId] = useState(initialConversationId);


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


    useEffect(() => {
        loadProfile();
        loadConversation();
    }, []);

    const loadProfile = async () => {
        try {
            const response = await api.get('/user/private', {
                params: { _id: contactId },
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            })
            if (response.data) {
                setFriend(response.data);
            }
        } catch (error) {
            console.log("Erro ao carregar perfil:", error);
        }
    }

    const loadConversation = async () => {
        try {
            const response = await api.get('/messages', {
                params: { conversationId: conversationId, userId: user._id, friendId: contactId },
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            });

            if (response.data) {
                // console.log("Mensagens carregadas:", response.data);
                setMessages(response.data);
                if(conversationId === undefined && response.data[0]?.conversationId){
                    setConversationId(response.data[0]?.conversationId);
                }
            }
        } catch (error) {
            console.log("Erro ao carregar conversa:", error);
        }
    }


    const sendMessage = async () => {
        try {
            const response = await api.post('/messages', {
                conversationId: conversationId,
                senderId: user._id,
                type: "text",
                text: inputMessage,
                fileUrl: null,
                receiverId: contactId,
            }, {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            })
            if (response.data) {
                console.log("Mensagem enviada:", response.data);
                setInputMessage('');
            }
        } catch (error) {
            console.log("Erro ao enviar mensagem:", error);
        }
    }

    const sendFile = async () => {
        // try {
        //     const result = await DocumentPicker.getDocumentAsync({});
        //     if (!result.canceled && result.assets) {
        //         const asset = result.assets[0];
        //         const currentTime = new Date().toLocaleTimeString("br-BR", {
        //             timeZone: "America/Sao_Paulo",
        //             hour: "2-digit",
        //             minute: "2-digit",
        //         });

        //         const newFileMessage: Message = {
        //             stringMessage: `Arquivo: ${asset.name}`,
        //             timeMessage: currentTime,
        //             userID: userId,
        //             file: {
        //                 name: asset.name,
        //                 uri: asset.uri,
        //                 size: asset.size
        //             }
        //         };

        //         setMessages([newFileMessage, ...messages]);
        //     }
        // } catch (error) {
        //     console.error("Erro ao selecionar o arquivo:", error);
        // }
    }

    return (
        <StyledBackground>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.avatarBox}>
                    <View style={styles.avatar}>
                        <Image source={friend?.avatarUrl ? { uri: friend.avatarUrl } : require('@/assets/default-avatar.jpg')} style={{ width: "100%", height: "100%", borderRadius: 50 }} />
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.textName}>{friend?.name}</Text>
                        <View style={styles.statusBox}>
                            {
                                friend?.status === "online" ?
                                    <View style={styles.statusOptionOn}></View>
                                    : <View style={styles.statusOptionOff}></View>
                            }
                            <Text style={styles.text}>{friend?.status}</Text>
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
                        renderItem={({ item }) => (
                            <MessageBox value={item} />
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
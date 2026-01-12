import ContactBox from "@/components/ContactBox";
import NewUserBox from "@/components/NewUserBox";
import StyledBackground from "@/components/StyledBackground";
import api from "@/constants/api";
import { useAuth } from "@/context/auth";
import { useSocket } from "@/context/socketContext";
import { styles } from "@/styles/home.style";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface Conversation {
    _id: string;
    lastMessage: {
        text: string;
        createdAt: string;
        senderId: string;
    };
    otherParticipant: {
        _id: string;
        name: string;
        status: string;
        avatarUrl?: string;
    };
}


interface NewContacts {
    _id: number,
    name: string,
    username: string,
    status: string,
    avatarUrl?: string,
}


export default function Home() {

    const router = useRouter();
    const { user } = useAuth();
    const { socket } = useSocket();
    const [contactBar, setContactBar] = useState(false);
    const searchContact = () => {
        setContactBar(!contactBar);
    }

    const [friendsBar, setFriendsBar] = useState(false);
    const [usernameSearch, setUsernameSearch] = useState('');
    const searchFriendsModal = () => {
        setFriendsBar(!friendsBar);
    }
    const searchFriends = async () => {
        console.log("Searching for friend:", usernameSearch);
        try {
            const response = await api.get('/user/', { params: { username: usernameSearch } });
            if (response.data && response.data.length > 0) {
                // console.log("Friend found:", response.data);
                setNewContacts(response.data);
            } else {
                alert("Usuário não encontrado.");
            }
        } catch (error) {
            console.log("Error searching for friend:", error);
        }
    }


    const loadConversations = async () => {
        if (!user) return;
        try {
            const response = await api.get('/conversations/', {
                params: { userId: user._id },
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            });

            if (response.data) {
                // console.log("Conversations loaded:", response.data);
                setContacts(response.data);
            }
        } catch (error) {
            console.log("Error loading conversations:", error);
        }
    }

    useEffect(() => {
        loadConversations();
    }, [])


    useEffect(() => {
        if (!socket) return;
        socket.emit('join', user._id);

        socket.on('conversationUpdated', () => {
            loadConversations();
        });


        socket.on("userStatusChanged", ({ userId, status }) => {
            console.log(`User ${userId} is now ${status}`);     
        });


        return () => {
            socket.off('conversationUpdated');
            socket.off('userStatusChanged');
        }

    }, [socket]);

    const [contacts, setContacts] = useState<Conversation[]>([])

    const [newContacts, setNewContacts] = useState<NewContacts[]>([])

    return <StyledBackground>
        <View style={styles.header}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.headerRight}>
                <Text style={styles.headerText}>Contatos</Text>
                <TouchableOpacity onPress={searchContact}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>

            </View>
            <View>
                {contactBar && <TextInput style={styles.input} placeholder="AAA" />}
            </View>
        </View>

        <View style={styles.content}>
            <FlatList
                data={contacts}
                renderItem={({ item }) => (
                    <ContactBox contact={item} />
                )}
                keyExtractor={(item) => item._id.toString()}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => { router.replace("/profile") }} style={styles.profileButton}>
                <Feather name="user" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { searchFriendsModal() }} style={styles.addPersonButton}>
                <Feather name="plus" size={50} color="white" />
            </TouchableOpacity>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={friendsBar}
            onRequestClose={() => { searchFriendsModal() }}
        >
            <TouchableOpacity style={styles.modalBackground} onPress={() => searchFriendsModal()} activeOpacity={1}>
                <TouchableWithoutFeedback>
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>Adicionar Contato</Text>
                        <Text style={styles.subTitle}>Digite o nome com o ID do contato</Text>
                        <View style={styles.inputUserBox}>
                            <TextInput style={styles.inputUser} placeholder="#Nome203" onChangeText={setUsernameSearch}></TextInput>
                            <TouchableOpacity onPress={searchFriends}>
                                <Feather name="search" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.usersFound}>
                            <Text style={styles.subTitle}>Usuarios:</Text>
                            <FlatList
                                data={newContacts}
                                renderItem={({ item }) => (
                                    <NewUserBox contact={item}></NewUserBox>
                                )}
                                keyExtractor={(item) => item._id.toString()}
                                showsVerticalScrollIndicator={false}
                            >
                            </FlatList>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    </StyledBackground>
}
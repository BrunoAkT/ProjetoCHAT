import ContactBox from "@/components/ContactBox";
import StyledBackground from "@/components/StyledBackground";
import { styles } from "@/styles/home.style";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface Contacts {
    id: number,
    name: string,
    lastMessage: string,
    time: string,
    image?: string,
    status: string,
}

export default function Home() {

    const router = useRouter();

    const [contactBar, setContactBar] = useState(false);
    const searchContact = () => {
        setContactBar(!contactBar);
    }

    const [friendsBar, setFriendsBar] = useState(false);
    const searchFriends = () => {
        setFriendsBar(!friendsBar);
    }

    const [contacts, setContacts] = useState<Contacts[]>([
        { id: 1, name: "Bruno Silva", lastMessage: "Oi, tudo bem?", time: "10:30 AM", status: "online" },
        { id: 2, name: "Maria Souza", lastMessage: "Vamos marcar um encontro.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", time: "9:15 AM", status: "offline" },
        { id: 3, name: "João Pereira", lastMessage: "Obrigado pelo ajuda!", time: "Yesterday", status: "online" },
        { id: 4, name: "Ana Costa", lastMessage: "Até mais tarde!", time: "Monday", status: "offline" },
    ])
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
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => { router.replace("/profile") }} style={styles.profileButton}>
                <Feather name="user" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { searchFriends() }} style={styles.addPersonButton}>
                <Feather name="plus" size={50} color="white" />
            </TouchableOpacity>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={friendsBar}
            onRequestClose={() => { searchFriends() }}
        >
            <TouchableOpacity style={styles.modalBackground} onPress={() => searchFriends()} activeOpacity={1}>
                <TouchableWithoutFeedback>
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>Adicionar Contato</Text>
                        <Text style={styles.subTitle}>Digite o nome com o ID do contato</Text>
                        <View style={styles.inputUserBox}>
                            <TextInput style={styles.inputUser} placeholder="Nome#203"></TextInput>
                            <TouchableOpacity>
                                <Feather name="search" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    </StyledBackground>
}
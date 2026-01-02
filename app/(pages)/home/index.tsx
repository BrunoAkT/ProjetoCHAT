import { useRouter } from "expo-router";
import { styles } from "@/styles/home.style";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import StyledBackground from "@/components/StyledBackground";
import ContactBox from "@/components/ContactBox";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

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
            <TouchableOpacity onPress={() => { router.push("/profile") }} style={styles.profileButton}>
                <Feather name="user" size={50} color="black" />
            </TouchableOpacity>
        </View>
    </StyledBackground>
}
import { useRouter } from "expo-router";
import { styles } from "@/styles/home.style";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import StyledBackground from "@/components/StyledBackground";
import ContactBox from "@/components/ContactBox";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function Home() {

    const router = useRouter();

    const [contactBar, setContactBar] = useState(false);

    const searchContact = () =>{
        setContactBar(!contactBar);
    }

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
                {contactBar && <TextInput style={styles.input} placeholder="AAA"/>}
            </View>
        </View>

        <View style={styles.content}>
            <ContactBox />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => { router.push("/profile") }} style= {styles.profileButton}>
                <Feather name="user" size={50} color="black" />
            </TouchableOpacity>
        </View>
    </StyledBackground>
}
import { useRouter } from "expo-router";
import { styles } from "@/styles/home.style";
import { Text, TouchableOpacity, View } from "react-native";
import StyledBackground from "@/components/StyledBackground";
import ContactBox from "@/components/ContactBox";
import { Feather } from "@expo/vector-icons";

export default function Home() {

    const router = useRouter();

    return <StyledBackground>
        <View style={styles.header}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.headerRight}>
                <Text style={styles.headerText}>Contatos</Text>
                <TouchableOpacity>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
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
import StyledBackground from "@/components/StyledBackground";
import { Feather } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "@/styles/chat.styles";
import { Colors } from "@/constants/Style.data";
import { useRouter } from "expo-router";

export default function Chat() {
    const router = useRouter();

    return (
        <StyledBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Feather name="arrow-left" size={24} color="black"  />
                </TouchableOpacity>
                <View style={styles.avatarBox}>
                    <View style={styles.avatar}>
                        <Text>Avatar</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.textName}>Name</Text>
                        <Text style={styles.text}>Online</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
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
        </StyledBackground>);
}
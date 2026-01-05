import { Modal, Text, TouchableOpacity, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { styles } from "@/styles/profile.styles";
import StyledBackground from "@/components/StyledBackground";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";


export default function Profile() {
    const router = useRouter();

    const [name, setName] = useState("Name");
    const [isEditingName, setIsEditingName] = useState(false);

    const [status, setStatus] = useState("Online");
    const [visibleStatus, setVisibleStatus] = useState(false);

    const onModalStatus = () => {
        setVisibleStatus(!visibleStatus);
    }

    const changeName = () => {
        setIsEditingName(!isEditingName);
    }
    return (
        <StyledBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.replace("/home")}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Perfil</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.avatarBox}>
                    <TouchableOpacity style={styles.avatar}>
                        <Text>Avatar</Text>
                    </TouchableOpacity>
                    <View style={styles.info}>
                        <View style={styles.nameEdit}>
                            <TextInput value={name} onChangeText={setName} style={isEditingName ? styles.textNameEditing : styles.textName} editable={isEditingName}></TextInput>
                            <TouchableOpacity style={styles.Edit} onPress={() => changeName()}>
                                <Feather name={isEditingName ? "check" : "edit"} size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text}>#0000</Text>
                        </View>
                        <TouchableOpacity style={status === "Online" ? styles.status : styles.statusOff} onPress={() => onModalStatus()}>
                            <Text style={styles.text}>
                                {status}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={visibleStatus}
                    onRequestClose={() => { onModalStatus() }}
                >
                    <TouchableWithoutFeedback onPress={() => onModalStatus()}>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity style={styles.statusOption} onPress={() => { setStatus("Online"); onModalStatus(); }}>
                                <View style={styles.statusOptionOn}></View>
                                <Text style={styles.text}>Online</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.statusOption} onPress={() => { setStatus("Offline"); onModalStatus(); }}>
                                <View style={styles.statusOptionOff}></View>
                                <Text style={styles.text}>Offline</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <View>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {router.replace("/login")}}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </StyledBackground>
    )
}
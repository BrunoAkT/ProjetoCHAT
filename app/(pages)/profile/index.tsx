import StyledBackground from "@/components/StyledBackground";
import api from "@/constants/api";
import { AuthContext } from "@/context/auth";
import { styles } from "@/styles/profile.styles";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Image, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';


export default function Profile() {
    const router = useRouter();
    const { user, setUser } = useContext(AuthContext);

    const [name, setName] = useState(user ? user?.name : "");
    const [isEditingName, setIsEditingName] = useState(false);

    const [status, setStatus] = useState("Offline");
    const [visibleStatus, setVisibleStatus] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const onModalStatus = () => {
        setVisibleStatus(!visibleStatus);
    }

    const changeStatus = async (newStatus: string) => {
        console.log("Changing status to:", newStatus);
        try {
            const response = await api.patch(`user/${user._id}`,
                {
                    status: newStatus
                },
                {
                    headers: {
                        authorization: `Bearer ${user.token}`
                    }
                });
            if (response.data) {
                // console.log("Status updated successfully:", response.data);
                setUser(response.data);
                onModalStatus()
            }

        } catch (error) {
            axios.isAxiosError(error) ? console.error(error.response ? error.response.data : error.message) : console.error(error);
            alert("Erro ao atualizar status.");
        }
    }

    const changeName = async () => {
        setIsEditingName(!isEditingName);
        if (isEditingName) {
            console.log("Updating name to:", name);
            try {
                const response = await api.patch(`user/${user._id}`,
                    {
                        name: name
                    },
                    {
                        headers: {
                            authorization: `Bearer ${user.token}`
                        }
                    });
                if (response.data) {
                    // console.log("Name updated successfully:", response.data);
                    setUser(response.data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error(error.response ? error.response.data : error.message)
                }
                alert("Erro ao atualizar nome.");
            }
        }
    }

    const changeImage = () => async () => {
        const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissions.granted === false) {
            alert("Permissão para acessar a galeria é necessária!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
        })
        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImage(uri);
            const formData = new FormData();

            formData.append("avatar",{
                uri: uri,
                name: `avatar_${user._id}.jpg`,
                type: "image/jpeg"
            } as any)
            console.log("Updating avatar image", result.assets[0].uri);
        }
    }

    const logout = () => {
        console.log("Logout");
        setUser(null);
        router.replace("/login");
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
                    <TouchableOpacity style={styles.avatar} onPress={changeImage()}>
                        <Image source={{ uri: user?.avatarUrl }} style={styles.avatarImage} />
                    </TouchableOpacity>
                    <View style={styles.info}>
                        <View style={styles.nameEdit}>
                            <TextInput value={name} onChangeText={setName} style={isEditingName ? styles.textNameEditing : styles.textName} editable={isEditingName}></TextInput>
                            <TouchableOpacity style={styles.Edit} onPress={() => changeName()}>
                                <Feather name={isEditingName ? "check" : "edit"} size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text}>#{user?.username}</Text>
                        </View>
                        <TouchableOpacity style={user?.status === "online" ? styles.status : styles.statusOff} onPress={() => onModalStatus()}>
                            <Text style={styles.text}>
                                {user?.status}
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
                            <TouchableOpacity style={styles.statusOption} onPress={() => { changeStatus("online") }}>
                                <View style={styles.statusOptionOn}></View>
                                <Text style={styles.text}>Online</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.statusOption} onPress={() => { changeStatus("offline") }}>
                                <View style={styles.statusOptionOff}></View>
                                <Text style={styles.text}>Offline</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <View>
                    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </StyledBackground>
    )
}
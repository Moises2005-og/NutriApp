import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {

    const [passwordActive, setPasswordActive] = useState(true)

    return(
        <>
            <View style={{backgroundColor: "#D8EED2", height: "100%"}}>
                    <View style={{width: "100%", paddingHorizontal: 20, paddingVertical: 50, justifyContent: "center"}}>
                        <View style={{justifyContent: "center"}}>  
                            <View style={{flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "center"}}>
                                <Image source={require("../assets/images/nutriLogo.png")} style={{width: 40, height: 40, objectFit: "contain"}}/>
                                <Text style={{color: "#3BAB1E", fontSize: 24, fontWeight: "bold"}}>NutriChef</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#FFF", borderTopLeftRadius: 40, borderTopRightRadius: 40,height: "100%", padding: 25}}>
                        <View style={{marginBottom: 32}}>
                            <Text style={{fontSize: 16, fontWeight: "semibold", marginBottom: 5}}>Entrar</Text>
                            <Text style={{color: "#8A8A8A"}}>Acesse as suas receitas saúdaveis favoritas</Text>
                        </View>
                        <View>
                            <View style={{flexDirection: "column", gap: 8, marginBottom: 16}}>
                                <Text>E-mail</Text>
                                <TextInput placeholder="Seu@mail.com" style={styles.input}/>
                            </View>
                            <View style={{flexDirection: "column", gap: 8}}>
                                <Text>Senha</Text>
                                <View style={styles.input2}>
                                    <TextInput placeholder="Sua senha de acesso" secureTextEntry={passwordActive}/>
                                    <TouchableOpacity onPress={() => setPasswordActive(passwordActive)}>
                                        {
                                            passwordActive ? <Image source={require("../assets/images/eye.png")} />:<Image source={require("../assets/images/eye-closed.png")} />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "#E5E7EB",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 16
    },
    input2: {
        borderColor: "#E5E7EB",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
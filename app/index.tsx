import { useAuth } from '@/hooks/useAuth';
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {

    const [passwordActive, setPasswordActive] = useState(true)
    const [check, setCheck] = useState<boolean>(false)
    const {handleChange, login, data} = useAuth()

    return(
        <>
            <View style={{backgroundColor: "#D8EED2", height: "100%"}}>
                    <View style={{width: "100%", paddingHorizontal: 20, paddingVertical: 45, justifyContent: "center"}}>
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
                                <TextInput placeholder="Seu@mail.com" onChangeText={(value) => handleChange(value, "email") } value={data.email} style={styles.input}/>
                            </View>
                            <View style={{flexDirection: "column", gap: 8}}>
                                <Text>Senha</Text>
                                <View style={styles.input2}>
                                    <TextInput placeholder="Sua senha de acesso" value={data.password} onChangeText={(value) => handleChange(value, "password")} secureTextEntry={passwordActive}/>
                                    <TouchableOpacity onPress={() => setPasswordActive(!passwordActive)}>
                                        {
                                            !passwordActive ? <Image source={require("../assets/images/eye.png")} />:<Image source={require("../assets/images/eye-closed.png")} />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                                <Checkbox style={{marginTop: 32, marginBottom: 20, borderRadius: 4}} color={check ? "#3BAB1E":""} value={check} onValueChange={setCheck} />
                                <Text style={{fontSize: 14, paddingTop: 10}}>Continuar Conectado</Text>
                            </View>

                            <TouchableOpacity style={{backgroundColor: "#3BAB1E", borderRadius: 10, width: 179, height: 49}} onPress={login}>
                                <Text style={{textAlign: "center", color: "#FDFDFD", fontSize: 16, margin: "auto"}}>Acessar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </>
    )
}
4
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
import { users } from "@/utils/mockData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

export function useAuth() {
  const [data, setData] = useState({ password: "", email: "" });
  const [payload, setPayload] = useState<any>({});
  const navigation = useNavigation<any>();

  const login = async () => {
    const user = users?.find((item: any) => item?.access?.email === data?.email);

    if (!user) {
      return Alert.alert("Erro", "O E-mail está errado");
    }

    if (user.access.password !== data.password) {
      return Alert.alert("Erro", "Palavra passe Errada");
    }

    try {
    console.log(">> User antes de salvar:", user);

    await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log(">> Gravado no storage!");

    const dados = await AsyncStorage.getItem("user");
    console.log(">> Dados crus do storage:", dados);

    if (dados) {
        const dadosConvert = JSON.parse(dados);
        console.log(">> Convertido:", dadosConvert);
        setPayload(dadosConvert);
    }

    navigation.navigate("home");
    } catch (err) {
    console.log("Erro AsyncStorage:", err);
    }

  };

  const handleChange = (value: string, name: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { handleChange, login, data, payload };
}

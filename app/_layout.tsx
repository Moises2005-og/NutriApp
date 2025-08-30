import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import FoodDetails from "./food-details/food-details";
import Home from "./home/home";
import Login from "./index";
import SearchPage from "./search-page/search-page";


export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkData() {
      try {
        const dados = await AsyncStorage.getItem("user");
        if (dados) {
          const dadosConvert = JSON.parse(dados);
          setInfo(dadosConvert);
          console.log("Usuário logado:", dadosConvert);
        } else {
          setInfo(null);
        }
      } finally {
        setLoading(false);
      }
    }
    checkData();
  }, []);

  if (loading) {
    return null;
  }


  return (
<Stack.Navigator
  initialRouteName={info ? "Home" : "Login"}
  screenOptions={{ gestureEnabled: false, headerBackVisible: false }}
>
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
  <Stack.Screen name="Food-Details" component={FoodDetails} options={{ headerShown: false }} />
  <Stack.Screen name="Search-Page" component={SearchPage} options={{ headerShown: false }} />
</Stack.Navigator>

  );
}

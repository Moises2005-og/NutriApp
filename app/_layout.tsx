import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./index";

export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
    )

}
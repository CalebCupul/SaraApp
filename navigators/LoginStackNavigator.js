import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import BottomTabNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator();

function LoginStackNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </>
  );
}

export default LoginStackNavigator;

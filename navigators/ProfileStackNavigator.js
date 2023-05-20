import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import EditProfileScreen from "../screens/users/EditProfileScreen";
import NotificationScreen from "../screens/users/NotificationScreen";
import ProfileScreen from "../screens/users/ProfileScreen";

const Stack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/users/ProfileScreen";

const Stack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;

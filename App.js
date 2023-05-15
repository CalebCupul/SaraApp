import {
  Urbanist_700Bold as UrbanistBold,
  Urbanist_500Medium as UrbanistMedium,
} from "@expo-google-fonts/urbanist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import "react-native-gesture-handler";
import { getUser } from "./api/usersApi";
import UserContextProvider, { UserContext } from "./contexts/UserContext";
import LoginStackNavigator from "./navigators/LoginStackNavigator";
import BottomTabNavigator from "./navigators/MainNavigator";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    UrbanistBold,
    UrbanistMedium,
  });

  // const onLayourRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <UserContextProvider>
        <Root />
      </UserContextProvider>
    </>
  );
}

function Root() {
  const userCtx = useContext(UserContext)

  useEffect(() => {
    async function fetchUser() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedUserId = await AsyncStorage.getItem("userId")
      if (storedToken && storedUserId) {
        const user = await getUser(storedToken, storedUserId)
        userCtx.storageAuthentication(storedToken, user.data)
      }
    }

    fetchUser();
  }, []);

  return <Navigation />;
}

function Navigation() {
  const userCtx = useContext(UserContext);

  return (
    <NavigationContainer>
      {!userCtx.isAuthenticated && <LoginStackNavigator />}
      {userCtx.isAuthenticated && <BottomTabNavigator />}
    </NavigationContainer>
  );
}

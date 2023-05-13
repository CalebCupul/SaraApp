import {
  Urbanist_500Medium as UrbanistMedium,
  Urbanist_700Bold as UrbanistBold
} from "@expo-google-fonts/urbanist";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import "react-native-gesture-handler";
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
        <Navigation />
      </UserContextProvider>
    </>
  );
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

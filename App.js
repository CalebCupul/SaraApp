import { Urbanist_500Medium as UrbanistMedium, Urbanist_700Bold as UrbanistBold } from "@expo-google-fonts/urbanist";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import BottomTabNavigator from "./navigators/MainNavigator";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    UrbanistBold,
    UrbanistMedium
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
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}

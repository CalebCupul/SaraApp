import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { createUser } from "../../api/authApi";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import SignUpForm from "../../components/auth/SignUpForm";

function SignUpScreen({ navigation }) {
  const [userData, setUserData] = useState({});
  // const [token, setToken] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function onSignUp({ name, email, password }) {
    setIsAuthenticating(true);
    const response = await createUser(name, email, password);
    console.log(response)
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Estamos creando tu cuenta..." />;
  }

  return (
    <View className="h-full bg-white p-4">
      <Image
        className="w-64 h-64 mx-auto"
        source={{
          uri: "https://doodleipsum.com/700x525?i=c40464c27eb96db99e50cd17f2ec4d0d",
        }}
      />
      <Text
        className="text-4xl text-dark-gray"
        style={{ fontFamily: "UrbanistBold" }}
      >
        Registrarse
      </Text>

      <SignUpForm onSignUp={onSignUp} />

      <View className="flex flex-row mt-8">
        <View className="w-1/3 h-3 border-b border-neutral-200"></View>
        <Text
          className="w-1/3 text-center"
          style={{ fontFamily: "UrbanistBold" }}
        >
          Ingresar con
        </Text>
        <View className="w-1/3 h-3 border-b border-neutral-200"></View>
      </View>

      <Pressable>
        <View className="p-1 w-10 h-10 items-center justify-center mx-auto mt-4 rounded-full border border-dark-gray">
          <Ionicons name="logo-google" size={20} color="#1C1C1E" />
        </View>
      </Pressable>
      <View className="mt-14 flex flex-row space-x-2 justify-center">
        <Text
          style={{ fontFamily: "UrbanistBold" }}
          className="text-light-gray"
        >
          ¿Tienes cuenta?
        </Text>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text
            style={{ fontFamily: "UrbanistBold" }}
            className="text-dark-gray"
          >
            Inicia sesión
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignUpScreen;

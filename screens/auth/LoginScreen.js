import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { login } from "../../api/authApi";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import LoginForm from "../../components/auth/LoginForm";
import { UserContext } from "../../contexts/UserContext";

function LoginScreen({ navigation }) {
  const userCtx = useContext(UserContext)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  
  async function onSubmit({email, password}){
    setIsAuthenticating(true);
    const data = await login(email, password);
    if (data.errors){
      Alert.alert('Error', data.errors.email[0]) // fix later
    } else {
      userCtx.authenticate(data.data)
    }
    setIsAuthenticating(false);

  }

  if (isAuthenticating){
    return <LoadingOverlay message="Iniciando sesión..." />
  }

  return (
    <View className="h-full bg-white p-4">
      <Image
        className="w-64 h-64 mx-auto mt-10 mb-5"
        source={{
          uri: "https://doodleipsum.com/700x394?bg=ffffff&i=c0c14656dd1584d7ad6fc3e0b6cb9bf9",
        }}
      />
      <Text
        className="text-4xl text-dark-gray"
        style={{ fontFamily: "UrbanistBold" }}
      >
        Ingresar
      </Text>

        <LoginForm onSubmit={onSubmit}/>


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
          ¿No tienes una cuenta?
        </Text>
        <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
          <Text
            style={{ fontFamily: "UrbanistBold" }}
            className="text-dark-gray"
          >
            Regístrate
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginScreen;

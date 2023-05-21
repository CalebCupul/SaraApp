import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { login } from "../../api/authApi";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import LoginForm from "../../components/auth/LoginForm";
import { UserContext } from "../../contexts/UserContext";

function LoginScreen({ navigation }) {
  const userCtx = useContext(UserContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function onSubmit({ email, password }) {
    setIsAuthenticating(true);
    const data = await login(email, password);
    if (data.errors) {
      Alert.alert("Error", data.errors.email[0]); // fix later
    } else {
      userCtx.authenticate(data.data);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Iniciando sesión..." />;
  }

  return (
    <KeyboardAvoidingView
      className="flex flex-1 justify-center mt-10"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView className="h-full bg-white p-4">
        <Image
          className="w-60 h-44 mx-auto mt-10 mb-5"
          style={{ resizeMode: "contain" }}
          source={{
            uri: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/18154412/image/medium-62a2dae6b05a2a5c4f4ee257d9eb1cac.png",
          }}
        />
        <Text
          className="text-4xl text-dark-gray mt-10"
          style={{ fontFamily: "UrbanistBold" }}
        >
          Ingresar
        </Text>

        <LoginForm onSubmit={onSubmit} />

        <View className="flex flex-row mt-14">
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
        <View className="mt-20 flex flex-row space-x-2 justify-center">
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

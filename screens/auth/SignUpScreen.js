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
import { createUser } from "../../api/authApi";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import SignUpForm from "../../components/auth/SignUpForm";
import { UserContext } from "../../contexts/UserContext";

function SignUpScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const userCtx = useContext(UserContext);

  async function onSignUp({ name, code, email, password }) {
    setIsAuthenticating(true);
    const data = await createUser(name, code, email, password);
    if (data.errors) {
      Alert.alert("Error", data.errors.email[0]); // fix later
    } else {
      userCtx.authenticate(data.data); // use token to authenticate user
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Estamos creando tu cuenta..." />;
  }

  return (
    <KeyboardAvoidingView
        className="flex flex-1 justify-center mt-10"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
    <ScrollView className="h-full bg-white p-4">
      
        <Image
          className="w-60 h-44 mx-auto mb-5"
          style={{ resizeMode: "contain" }}
          source={require('../../assets/shared/logo.png')}
        />
        <Text
          className="text-4xl text-dark-gray"
          style={{ fontFamily: "UrbanistBold" }}
        >
          Registrarse
        </Text>

        <SignUpForm onSignUp={onSignUp} />

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
        <View className="flex flex-row space-x-2 justify-center mt-10">
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
    </ScrollView>
    </KeyboardAvoidingView>

  );
}

export default SignUpScreen;

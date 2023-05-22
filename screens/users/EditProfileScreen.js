import { useContext, useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, Text } from "react-native";
import { createUser } from "../../api/authApi";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import EditForm from "../../components/users/EditForm";
import { UserContext } from "../../contexts/UserContext";

function EditProfileScreen({ navigation }) {
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
      className="flex flex-1 justify-center bg-white pt-24"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView className="h-full bg-white p-4">
        <Text
          className="text-2xl text-dark-gray"
          style={{ fontFamily: "UrbanistBold" }}
        >
          Actualiza tu información
        </Text>

        <EditForm onSignUp={onSignUp} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default EditProfileScreen;

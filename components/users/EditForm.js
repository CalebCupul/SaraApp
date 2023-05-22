import { useContext, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import { editUser } from "../../api/usersApi";
import { UserContext } from "../../contexts/UserContext";

function EditForm() {
  const userCtx = useContext(UserContext);

  const [inputValues, setInputValues] = useState({
    name: userCtx.userInfo.name,
    email: userCtx.userInfo.email,
    password: "",
    confirmPassword: "",
  });
  const [inputIsHidden, setinputIsHidden] = useState({
    passwordIsHidden: true,
    confirmPasswordIsHidden: true,
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((prevInputValues) => {
      return {
        ...prevInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  const togglePasswordVisibility = (inputName) => {
    setinputIsHidden((prevInputIsHidden) => ({
      ...prevInputIsHidden,
      [inputName]: !prevInputIsHidden[inputName],
    }));
  };

  async function editHandler() {
    const { confirmPassword, ...userData } = inputValues;

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailIsValid = regex.test(userData.email);
    const passwordIsValid =
      !inputValues.password || inputValues.password.length > 0;
    const confirmPasswordIsValid =
      !inputValues.confirmPassword || inputValues.confirmPassword.length > 0;

    if (
      !passwordIsValid ||
      userData.email.length === 0 ||
      !confirmPasswordIsValid
    ) {
      Alert.alert(
        "Formulario incompleto",
        "Complete todos los campos para ingresar."
      );
      return;
    } else if (!emailIsValid) {
      Alert.alert("Formulario incompleto", "El correo no es válido.");
      return;
    } else if (inputValues.password && userData.password !== confirmPassword) {
      Alert.alert("Formulario incompleto", "Las contraseñas no coinciden.");
      return;
    } else if (
      inputValues.password &&
      (confirmPassword.length <= 8 || inputValues.password.length <= 8)
    ) {
      Alert.alert(
        "Contraseña muy corta",
        "La contraseña debe tener más de 8 caracteres"
      );
      return;
    }

    const data = await editUser(userCtx.token, userCtx.userInfo.id, {
      ...userData,
      confirmPassword: undefined, // Exclude confirmPassword property
    });
    if (data.errors) {
      Alert.alert("Error", data.errors.email[0]); // fix later
    } else {
      Alert.alert("Hecho!", "Tu cuenta se actualizó con éxito.");
      userCtx.authenticate(data.user)

    }
  }
  return (
    <View>
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="ASDASDASDASD"
        className="mt-4 border-b border-neutral-200 h-10"
        onChangeText={(enteredValue) =>
          inputChangedHandler("name", enteredValue)
        }
        value={inputValues.name}
      />

      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Correo"
        className="mt-4 border-b border-neutral-200 h-10"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(enteredValue) =>
          inputChangedHandler("email", enteredValue)
        }
        value={inputValues.email}
      />
      <View className="flex flex-row justify-between mt-4 border-b border-neutral-200">
        <TextInput
          style={{ fontFamily: "UrbanistMedium" }}
          placeholder="Contraseña"
          autoCapitalize="none"
          secureTextEntry={inputIsHidden.passwordIsHidden ? true : false}
          className={`w-3/4 h-10 ${
            inputIsHidden.passwordIsHidden && inputValues.password.length > 0
              ? "tracking-widest"
              : ""
          }`}
          textContentType="password"
          onChangeText={(enteredValue) =>
            inputChangedHandler("password", enteredValue)
          }
          value={inputValues.password}
        />
        <Pressable onPress={() => togglePasswordVisibility("passwordIsHidden")}>
          {inputIsHidden.passwordIsHidden ? (
            <EyeIcon color="#959597" size={27}></EyeIcon>
          ) : (
            <EyeSlashIcon color="#959597" size={27}></EyeSlashIcon>
          )}
        </Pressable>
      </View>
      <View className="flex flex-row justify-between mt-4 border-b border-neutral-200">
        <TextInput
          style={{ fontFamily: "UrbanistMedium" }}
          placeholder="Confirmar contraseña"
          autoCapitalize="none"
          secureTextEntry={inputIsHidden.confirmPasswordIsHidden ? true : false}
          className={`w-3/4 h-10 ${
            inputIsHidden.confirmPasswordIsHidden &&
            inputValues.password.length > 0
              ? "tracking-widest"
              : ""
          }`}
          textContentType="password"
          onChangeText={(enteredValue) =>
            inputChangedHandler("confirmPassword", enteredValue)
          }
          value={inputValues.confirmPassword}
        />
        <Pressable
          onPress={() => togglePasswordVisibility("confirmPasswordIsHidden")}
        >
          {inputIsHidden.confirmPasswordIsHidden ? (
            <EyeIcon color="#959597" size={27}></EyeIcon>
          ) : (
            <EyeSlashIcon color="#959597" size={27}></EyeSlashIcon>
          )}
        </Pressable>
      </View>
      {/* <TextInput
              style={{ fontFamily: "UrbanistMedium" }}
              placeholder="Confirmar contraseña"
              autoCapitalize="none"
              secureTextEntry={ isHidden ? true : false }
              className="mt-4 border-b border-neutral-200 py-1"
              textContentType="password"
              onChangeText={(enteredValue) =>
                inputChangedHandler("confirmPassword", enteredValue)
              }
              value={inputValues.confirmPassword}
            /> */}

      <Pressable onPress={editHandler}>
        <View className="mt-4 bg-dark-gray rounded-md p-2">
          <Text
            className="text-white text-center"
            style={{ fontFamily: "UrbanistBold" }}
          >
            Guardar
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default EditForm;

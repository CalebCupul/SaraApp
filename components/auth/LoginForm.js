import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";

function LoginForm(props) {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [isHidden, setIsHidden] = useState(true);

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((prevInputValues) => {
      return {
        ...prevInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const userData = {
      email: inputValues.email,
      password: inputValues.password,
    };

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailIsValid = regex.test(userData.email);
    const passwordIsValid = userData.password.length > 0;

    if (!passwordIsValid || !emailIsValid) {
      Alert.alert(
        "Formulario incompleto",
        "Complete todos los campos para ingresar."
      );
      return;
    }

    props.onSubmit(userData);
  }

  return (
    <View>
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
          secureTextEntry={ isHidden ? true : false }
          className={`w-3/4 h-10 ${ isHidden && inputValues.password.length > 0 ? 'tracking-widest' : ''}`}
          textContentType="password"
          onChangeText={(enteredValue) =>
            inputChangedHandler("password", enteredValue)
          }
          value={inputValues.password}
        />
        <Pressable onPress={() => setIsHidden(!isHidden)}>
        { isHidden ? <EyeIcon color="#959597" size={27}></EyeIcon> : <EyeSlashIcon color="#959597" size={27}></EyeSlashIcon>}
        </Pressable>
      </View>

      <Text
        style={{ fontFamily: "UrbanistBold" }}
        className="ml-auto mt-2 text-light-gray"
      >
        Olvidé mi contraseña
      </Text>

      <Pressable onPress={submitHandler}>
        <View className="mt-4 bg-dark-gray rounded-md p-2">
          <Text
            className="text-white text-center"
            style={{ fontFamily: "UrbanistBold" }}
          >
            Ingresar
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default LoginForm;

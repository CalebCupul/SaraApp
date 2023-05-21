import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

function LoginForm(props) {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

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
    const emailIsValid = regex.test(userData.email)
    const passwordIsValid = userData.password.length > 0

    if (!passwordIsValid || !emailIsValid){
      Alert.alert('Formulario incompleto', 'Complete todos los campos para ingresar.')
      return
    }

    props.onSubmit(userData)
  }

  return (
    <View>
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Correo"
        className="mt-4 border-b border-neutral-200 py-1"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(enteredValue) =>
          inputChangedHandler("email", enteredValue)
        }
        value={inputValues.email}
      />
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Contraseña"
        className="mt-4 border-b border-neutral-200 py-1"
        textContentType="password"
        onChangeText={(enteredValue) =>
          inputChangedHandler("password", enteredValue)
        }
        value={inputValues.password}
      />

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

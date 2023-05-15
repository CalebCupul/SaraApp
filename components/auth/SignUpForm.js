import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

function SignUpForm(props) {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((prevInputValues) => {
      return {
        ...prevInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function signUpHandler() {
    const userData = {
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password,
      confirmPassword: inputValues.confirmPassword,
    };

    // const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // const emailIsValid = regex.test(userData.email);
    // const passwordIsValid = userData.password.length > 0;
    // const confirmPasswordIsValid = userData.confirmPassword.length > 0;

    // if (!passwordIsValid || !emailIsValid || !confirmPasswordIsValid) {
    //   Alert.alert(
    //     "Formulario incompleto",
    //     "Complete todos los campos para ingresar."
    //   );
    //   return;
    // } else if (userData.password !== userData.confirmPassword) {
    //   Alert.alert("Formulario incompleto", "Las constraseñas no coindicen.");
    //   return;
    // }
    props.onSignUp(userData);
  }

  return (
    <View>
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Nombre"
        className="mt-4 border-b border-neutral-200 py-1"
//         keyboardType="name"
        // textContentType="emailAddress"
        onChangeText={(enteredValue) =>
          inputChangedHandler("name", enteredValue)
        }
        value={inputValues.name}
      />
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
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Confirmar contraseña"
        className="mt-4 border-b border-neutral-200 py-1"
        textContentType="password"
        onChangeText={(enteredValue) =>
          inputChangedHandler("confirmPassword", enteredValue)
        }
        value={inputValues.confirmPassword}
      />

      <Pressable onPress={signUpHandler}>
        <View className="mt-4 bg-dark-gray rounded-md p-2">
          <Text
            className="text-white text-center"
            style={{ fontFamily: "UrbanistBold" }}
          >
            Registrarse
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SignUpForm;

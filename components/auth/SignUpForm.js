import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";

function SignUpForm(props) {
  const [inputValues, setInputValues] = useState({
    name: "",
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputIsHidden, setinputIsHidden] = useState({
    passwordIsHidden: true,
    confirmPasswordIsHidden: true
  })

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
      [inputName]: !prevInputIsHidden[inputName]
    }));
  };

  function signUpHandler() {
    const userData = {
      name: inputValues.name,
      code: inputValues.code,
      email: inputValues.email,
      password: inputValues.password,
      confirmPassword: inputValues.confirmPassword,
    };

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailIsValid = regex.test(userData.email);
    const passwordIsValid = userData.password.length > 0;
    const confirmPasswordIsValid = userData.confirmPassword.length > 0;
    const codeIsValid = userData.code.length > 0

    if (!passwordIsValid || !emailIsValid || !confirmPasswordIsValid || !codeIsValid) {
      Alert.alert(
        "Formulario incompleto",
        "Complete todos los campos para ingresar."
      );
      return;
    } else if (userData.password !== userData.confirmPassword) {
      Alert.alert("Formulario incompleto", "Las constraseñas no coindicen.");
      return;
    }
    props.onSignUp(userData);
  }

  return (
    <View>
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Nombre"
        className="mt-4 border-b border-neutral-200 h-10"
        onChangeText={(enteredValue) =>
          inputChangedHandler("name", enteredValue)
        }
        value={inputValues.name}
      />
       <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Código"
        className="mt-4 border-b border-neutral-200 h-10"
        keyboardType="numeric"
        // textContentType="emailAddress"
        onChangeText={(enteredValue) =>
          inputChangedHandler("code", enteredValue)
        }
        value={inputValues.code}
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
          secureTextEntry={ inputIsHidden.passwordIsHidden ? true : false }
          className={`w-3/4 h-10 ${ inputIsHidden.passwordIsHidden && inputValues.password.length > 0 ? 'tracking-widest' : ''}`}
          textContentType="password"
          onChangeText={(enteredValue) =>
            inputChangedHandler("password", enteredValue)
          }
          value={inputValues.password}
        />
        <Pressable onPress={() => togglePasswordVisibility('passwordIsHidden')}>
        { inputIsHidden.passwordIsHidden ? <EyeIcon color="#959597" size={27}></EyeIcon> : <EyeSlashIcon color="#959597" size={27}></EyeSlashIcon>}
        </Pressable>
      </View>
      <View className="flex flex-row justify-between mt-4 border-b border-neutral-200">
        <TextInput
          style={{ fontFamily: "UrbanistMedium" }}
          placeholder="Confirmar contraseña"
          autoCapitalize="none"
          secureTextEntry={ inputIsHidden.confirmPasswordIsHidden ? true : false }
          className={`w-3/4 h-10 ${ inputIsHidden.confirmPasswordIsHidden && inputValues.password.length > 0 ? 'tracking-widest' : ''}`}
          textContentType="password"
          onChangeText={(enteredValue) =>
            inputChangedHandler("confirmPassword", enteredValue)
          }
          value={inputValues.confirmPassword}
        />
        <Pressable onPress={() => togglePasswordVisibility('confirmPasswordIsHidden')}>
        { inputIsHidden.confirmPasswordIsHidden ? <EyeIcon color="#959597" size={27}></EyeIcon> : <EyeSlashIcon color="#959597" size={27}></EyeSlashIcon>}
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

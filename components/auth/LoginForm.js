import { TextInput, View } from "react-native";

function LoginForm() {
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

  return (
    <View>
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Correo"
        className="mt-4 border-b border-neutral-200 py-1"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(enteredValue) => inputChangedHandler('email', enteredValue)}
        value={inputValues.email}
      />
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Contraseña"
        className="mt-4 border-b border-neutral-200 py-1"
        textContentType="password"
        onChangeText={(enteredValue) => inputChangedHandler('password', enteredValue)}
        value={inputValues.password}
      />
    </View>
  );
}

export default LoginForm;

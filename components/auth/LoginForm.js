import { TextInput, View } from "react-native";

function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')


  function emailChangedHandler(){}

  function passwordChangedHandler(){}

  return (
    <View>
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Correo"
        className="mt-4 border-b border-neutral-200 py-1"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={emailChangedHandler}
      />
      <TextInput
        style={{ fontFamily: "UrbanistMedium" }}
        placeholder="Contraseña"
        className="mt-4 border-b border-neutral-200 py-1"
        textContentType="password"
        onChangeText={passwordChangedHandler}
      />
    </View>
  );
}

export default LoginForm;

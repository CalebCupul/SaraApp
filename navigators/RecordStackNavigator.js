import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecordsScreen from "../screens/records/RecordsScreen";

const Stack = createNativeStackNavigator();

function RecordStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Records" component={RecordsScreen} />
    </Stack.Navigator>
  );
}

export default RecordStackNavigator;

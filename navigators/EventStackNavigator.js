import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetailsScreen from "../screens/events/EventDetailsScreen";
import EventsScreen from "../screens/events/EventsScreen";

const Stack = createNativeStackNavigator();

function EventStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
    </Stack.Navigator>
  );
}

export default EventStackNavigator;

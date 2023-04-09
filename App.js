import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { AcademicCapIcon, CalendarDaysIcon, UserCircleIcon } from "react-native-heroicons/outline";
import EventsScreen from "./screens/events/EventsScreen";
import RecordsScreen from "./screens/records/RecordsScreen";
import ProfileScreen from "./screens/users/ProfileScreen";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Events" component={EventsScreen} options={{
            tabBarIcon: () => {
              return <CalendarDaysIcon color="gray"/>
            }
          }}></Tab.Screen>
          <Tab.Screen name="Records" component={RecordsScreen} options={{
            tabBarIcon: () => {
              return <AcademicCapIcon color="gray"/>
            }
          }}></Tab.Screen>
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: () => {
              return <UserCircleIcon color="gray"/>
            }
          }}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AcademicCapIcon, CalendarDaysIcon, UserCircleIcon } from "react-native-heroicons/outline";
import EventStackNavigator from "./EventStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import RecordStackNavigator from "./RecordStackNavigator";
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="EventsScreen"
          component={EventStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <CalendarDaysIcon color="gray" />;
            },
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="RecordsScreen"
          component={RecordStackNavigator}
          options={{
            tabBarIcon: () => {
              return <AcademicCapIcon color="gray" />;
            },
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="ProfileScreen"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: () => {
              return <UserCircleIcon color="gray" />;
            },
          }}
        ></BottomTab.Screen>
      </BottomTab.Navigator>
    );
  }

export default BottomTabNavigator
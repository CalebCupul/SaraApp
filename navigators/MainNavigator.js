import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AcademicCapIcon, CalendarDaysIcon, UserCircleIcon } from "react-native-heroicons/outline";
import EventStackNavigator from "./EventStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import RecordStackNavigator from "./RecordStackNavigator";
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
      <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#1C1C1E',
        tabBarInactiveTintColor: '#959597',
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => {
          if (route.name === 'EventsScreen'){
            return <CalendarDaysIcon color={color} size={27} />;
          }

          if (route.name === 'RecordsScreen'){
            return <AcademicCapIcon color={color} size={27} />;
          }

          if (route.name === 'ProfileScreen'){
            return <UserCircleIcon color={color} size={27} />;
          }

          return null
        }
      })}
      >
        
        <BottomTab.Screen
          name="EventsScreen"
          component={EventStackNavigator}
          options={{
            headerShown: false
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="RecordsScreen"
          component={RecordStackNavigator}
          options={{
            headerShown: false,
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="ProfileScreen"
          component={ProfileStackNavigator}
          options={{
            headerShown: false,
          }}
        ></BottomTab.Screen>
      </BottomTab.Navigator>
    );
  }

export default BottomTabNavigator
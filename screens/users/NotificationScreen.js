import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { BellAlertIcon } from "react-native-heroicons/outline";

function NotificationScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="p-4 bg-white">
      <View className="flex flex-row ">
        <View className="flex flex-row">
          <BellAlertIcon style={{ color: "#1C1C1E" }} width={22} />
          <Text>Recibir notificaciones</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

export default NotificationScreen;

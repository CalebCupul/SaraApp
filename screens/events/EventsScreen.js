import { Pressable, Text, TextInput, View } from "react-native";
import {
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import EventsItem from "../../components/events/EventsItem";

function EventsScreen() {
  return (
    <>
      <View className="flex-row p-4 space-x-2">
        <View className="bg-white p-2 rounded-md flex-1 flex-row space-x-2">
          <MagnifyingGlassIcon color="#1C1C1E" />
          <TextInput placeholder="Buscar eventos" />
        </View>
        <View className="bg-white rounded-md">
          <Pressable android_ripple={{ color: "gray", borderless: true }}>
            <View className="p-2">
              <AdjustmentsHorizontalIcon color="#1C1C1E" width={26} height={26} />
            </View>
          </Pressable>
        </View>
      </View>
      <View className="px-4">
        <Text className="text-lg" style={{ fontFamily: "UrbanistBold" }}>
          Open job for you
        </Text>
        <EventsItem />
      </View>
    </>
  );
}

export default EventsScreen;

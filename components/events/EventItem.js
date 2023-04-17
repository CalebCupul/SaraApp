import { Image, ScrollView, Text, View } from "react-native";
import {
  CalendarDaysIcon,
  HeartIcon
} from "react-native-heroicons/outline";

function EventItem(props) {
  // console.log(props)
  return (
    <View className="bg-white rounded-md p-4 mt-2">
      <View className="flex-row space-x-4">
        <Image
          className="w-14 h-14 object-contain rounded-md"
          source={{ uri: "https://blog.hubspot.com/hubfs/image8-2.jpg" }}
        />
        <View className="flex-1">
          <View className="flex-row justify-between">
            <Text
              numberOfLines={1}
              className="text-lg text-dark-gray"
              style={{ fontFamily: "UrbanistBold" }}
            >
              {props.event.id} - {props.event.codigo_alumno}
            </Text>
            <HeartIcon style={{ color: "#1C1C1E" }} />
          </View>
          <Text
            numberOfLines={1}
            className="text-light-gray w-3/4"
            style={{ fontFamily: "UrbanistBold" }}
          >
            Caleb Cupul
          </Text>
        </View>
      </View>
      <View className="mt-4 flex-row ">
        <ScrollView horizontal={true} className="space-x-4 pb-2">
          <Text
            style={{ fontFamily: "UrbanistBold" }}
            className="bg-default-gray rounded-xl text-sm py-1 px-3"
          >
            Psicología
          </Text>
          <Text
            style={{ fontFamily: "UrbanistBold" }}
            className="bg-default-gray rounded-xl text-sm py-1 px-3"
          >
            Arquitectura
          </Text>
          <Text
            style={{ fontFamily: "UrbanistBold" }}
            className="bg-default-gray rounded-xl text-sm py-1 px-3"
          >
            Computación
          </Text>
          <Text
            style={{ fontFamily: "UrbanistBold" }}
            className="bg-default-gray rounded-xl text-sm py-1 px-3"
          >
            Computación
          </Text>
        </ScrollView>
      </View>
        {/* <View className="mt-2 w-3/5 flex flex-row items-center space-x-1">
          <MapPinIcon color={"#1C1C1E"} width={18} />
          <Text
            numberOfLines={1}
            style={{ fontFamily: "UrbanistBold" }}
            className="text-light-gray"
          >
            Auditorio Cifuentes Auditorio Cifuentes Auditorio
          </Text>
        </View> */}
        <View className="mt-2 flex flex-row items-center space-x-1 mr-auto">
          <CalendarDaysIcon color={"#1C1C1E"} width={18} />
          <Text
            numberOfLines={1}
            style={{ fontFamily: "UrbanistBold" }}
            className="text-light-gray"
          >
            24 de Marzo
          </Text>
        </View>
    </View>
  );
}

export default EventItem;

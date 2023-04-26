import { Image, Pressable, Text, View } from "react-native";
import { ArrowDownTrayIcon } from "react-native-heroicons/outline";

function RecordItem(props) {
  const {
    id,
    codigo_alumno,
    fecha,
    fecha_diff,
    evento: { fecha: fecha_evento, id: id_evento, titulo, ponente },
  } = props.event;

  return (
    <Pressable className="flex-row space-x-4" >
      <Image
        className="w-14 h-14 object-contain rounded-md"
        source={{ uri: "https://blog.hubspot.com/hubfs/image8-2.jpg" }}
      />
      <View className="flex-1">
        <View className="flex-row justify-between">
          <Text
            numberOfLines={1}
            className="text-lg text-dark-gray w-4/5"
            style={{ fontFamily: "UrbanistBold" }}
          >
            {titulo}
          </Text>
          <Pressable onPress={() => console.log('pressed nested')} android_ripple={{ color: "gray", borderless: true }}>
            <ArrowDownTrayIcon style={{ color: "#1C1C1E" }} width={20} />
          </Pressable>
        </View>
        <View className="flex-row justify-between">
          <Text
            numberOfLines={1}
            className="text-light-gray w-3/5"
            style={{ fontFamily: "UrbanistBold" }}
          >
            {ponente}
          </Text>
          <Text
            numberOfLines={1}
            className="text-light-gray"
            style={{ fontFamily: "UrbanistBold" }}
          >
            {fecha_diff}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default RecordItem;

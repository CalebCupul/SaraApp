import { useContext } from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { ArrowDownTrayIcon } from "react-native-heroicons/outline";
import { downloadRecord } from "../../api/recordsApi";
import { UserContext } from "../../contexts/UserContext";


function RecordItem(props) {
  const userCtx = useContext(UserContext);
  const {
    id,
    codigo_alumno,
    fecha,
    fecha_diff,
    evento: { fecha: fecha_evento, id: id_evento, titulo, ponente },
  } = props.event;

  async function downloadRecordHandler() {
    const response = await downloadRecord(userCtx.token, id);
    Linking.openURL(response.request.responseURL)
  }

  return (
    <Pressable className="flex-row space-x-4">
      <Image
        className="w-14 h-14 object-contain rounded-md"
        source={require('../../assets/events/eventImage.png')}
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
          <Pressable onPress={() => downloadRecordHandler()}>
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

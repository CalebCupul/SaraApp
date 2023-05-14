import { useContext } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import {
  ArrowUturnRightIcon,
  ClockIcon,
  MapPinIcon,
  QrCodeIcon,
} from "react-native-heroicons/outline";
import { UserContext } from "../../contexts/UserContext";

function EventDetailsScreen({ route }) {
  const event = route.params.props.event;
  const userCtx = useContext(UserContext);

  const description =
    "¡Bienvenidos al evento de La relación de la contaminación con los cocodrilos de Puerto Vallarta! Este será un encuentro especial para abordar la problemática que representa la contaminación en la región y su impacto en la fauna local, en particular en los cocodrilos. La cita será en el hermoso puerto de Vallarta, ubicado en la costa del Pacífico mexicano, el cual es reconocido por su belleza natural, su cultura y su gastronomía. Durante este evento, expertos en medio ambiente y conservación, así como miembros de la comunidad local, compartirán información y experiencias sobre la relación entre la contaminación y los cocodrilos de la región. La presencia de estos animales es fundamental para el equilibrio ecológico de la zona, sin embargo, los niveles de contaminación y la falta de conciencia ambiental están poniendo en riesgo su supervivencia.";

  console.log(event);
  return (
    <ScrollView>
      <View className="p-4 bg-white">
        <View className="flex-row justify-between">
          <View className="w-4/5">
            <Text className="text-xl" style={{ fontFamily: "UrbanistBold" }}>
              {event.titulo}
            </Text>
            <Text style={{ fontFamily: "UrbanistBold" }}>{event.ponente}</Text>

            <View className="mt-4 flex flex-row items-center space-x-1">
              <ClockIcon color={"#1C1C1E"} width={18} />
              <Text
                style={{ fontFamily: "UrbanistMedium" }}
                className="text-dark-gray"
              >
                {event.horaini} a {event.horafin}
              </Text>
            </View>

            <View className="flex flex-row items-center space-x-1">
              <MapPinIcon color={"#1C1C1E"} width={18} />
              <Text
                style={{ fontFamily: "UrbanistMedium" }}
                className="text-dark-gray"
              >
                Auditorio Juan Luis Cifuentes Lemus
              </Text>
            </View>
          </View>
          <Image
            className="w-16 h-16 object-contain rounded-md"
            source={{ uri: "https://blog.hubspot.com/hubfs/image8-2.jpg" }}
          />
        </View>
        <View>
          <Text className="mt-4">{description.split(". ").join("\n\n")}</Text>
        </View>

        <Text
          style={{ fontFamily: "UrbanistBold" }}
          className="mt-4 text-dark-gray text-xl"
        >
          Ponentes
        </Text>

        <View className="mt-4 flex-row space-x-4">
          <Image
            className="rounded-md w-32 h-32"
            resizeMethod="auto"
            resizeMode="contain"
            source={{
              uri: "https://cdn.emailmonday.com/wp-content/uploads/keynote-marketing-speaker-jordie-van-rijn-3.jpg",
            }}
          />

          <View className="w-2/4">
            <Text
              style={{ fontFamily: "UrbanistBold" }}
              className="text-dark-gray text-lg leading-5"
            >
              {event.ponente}
            </Text>
            <Pressable onPress={() => console.log("ver ponente")}>
              <View className="mt-4 w-28 flex flex-row space-x-1 rounded-full bg-dark-gray items-center justify-center">
                <Text
                  style={{ fontFamily: "UrbanistBold" }}
                  className="text-white text-xs"
                >
                  Ver más
                </Text>
                <ArrowUturnRightIcon color={"white"} width={13} />
              </View>
            </Pressable>
          </View>
        </View>

        {userCtx.userInfo.role_id != 0 ? (
          <Pressable>
            <View className="mx-auto mt-4 py-1 px-4 flex flex-row space-x-1 rounded-full bg-dark-gray items-center justify-center w-60">
              <QrCodeIcon color={"white"} width={30} />
              <Text
                style={{ fontFamily: "UrbanistMedium" }}
                className="text-white"
              >
                Generar constancia via QR
              </Text>
            </View>
          </Pressable>
        ) : (
          ""
        )}
      </View>
    </ScrollView>
  );
}

export default EventDetailsScreen;

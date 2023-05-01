import { useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import {
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  QrCodeIcon,
} from "react-native-heroicons/outline";

function ProfileScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className={`bg-white h-full ${modalVisible ? 'bg-black opacity-60' : ''}`}>
      <View className="mt-10">
        <Image
          className="bg-black w-40 h-40 rounded-full mx-auto"
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          }}
        />
        <View className="mt-4">
          <Text
            className="text-2xl text-dark-gray text-center px-4"
            style={{ fontFamily: "UrbanistBold" }}
          >
            Caleb German
          </Text>
          <Text
            className="text-lg text-dark-gray text-center px-4"
            style={{ fontFamily: "UrbanistMedium" }}
          >
            caleb.cupul@alumnos.udg.mx
          </Text>
          <Text
            className="text-lg text-dark-gray text-center px-4"
            style={{ fontFamily: "UrbanistMedium" }}
          >
            219294633
          </Text>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View className="p-4 mx-auto my-auto bg-white shadow-md rounded-md">
            <Image className="w-40 h-40" source={{uri: 'https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png'}}/>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ fontFamily: "UrbanistBold" }} className="text-center mt-4 py-2 rounded-md bg-dark-gray text-white">CERRAR</Text>
            </Pressable>
          </View>
        </Modal>

        <View className="mt-4 px-14 space-y-3">
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View className="flex flex-row space-x-2 items-center">
              <QrCodeIcon style={{ color: "#1C1C1E" }} width={22} />
              <View className="flex flex-row justify-around items-center">
                <Text
                  className="text-lg text-dark-gray w-4/5"
                  style={{ fontFamily: "UrbanistBold" }}
                >
                  QR
                </Text>
                <ChevronRightIcon style={{ color: "#1C1C1E" }} width={22} />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("EditProfileScreen")}>
            <View className="flex flex-row space-x-2 items-center">
              <Cog6ToothIcon style={{ color: "#1C1C1E" }} width={22} />
              <View className="flex flex-row items-center justify-around">
                <Text
                  className="text-lg text-dark-gray w-4/5"
                  style={{ fontFamily: "UrbanistBold" }}
                >
                  Perfil
                </Text>
                <ChevronRightIcon style={{ color: "#1C1C1E" }} width={22} />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("NotificationScreen")}>
            <View className="flex flex-row space-x-2 items-center">
              <BellAlertIcon style={{ color: "#1C1C1E" }} width={22} />
              <View className="flex flex-row justify-around items-center">
                <Text
                  className="text-lg text-dark-gray w-4/5"
                  style={{ fontFamily: "UrbanistBold" }}
                >
                  Notificaciones
                </Text>
                <ChevronRightIcon style={{ color: "#1C1C1E" }} width={22} />
              </View>
            </View>
          </Pressable>
          <Pressable>
            <View className="flex flex-row space-x-2 items-center">
              <ArrowLeftOnRectangleIcon
                style={{ color: "#1C1C1E" }}
                width={22}
              />
              <View className="flex flex-row justify-around items-center">
                <Text
                  className="text-lg text-dark-gray w-4/5"
                  style={{ fontFamily: "UrbanistBold" }}
                >
                  Cerrar sesión
                </Text>
                <ChevronRightIcon style={{ color: "#1C1C1E" }} width={22} />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

import { useContext, useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import {
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  QrCodeIcon
} from "react-native-heroicons/outline";
import { UserContext } from "../../contexts/UserContext";

function ProfileScreen({ navigation }) {
  const userCtx = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      className={`bg-white pt-14 h-full ${modalVisible ? "bg-black opacity-60" : ""}`}
    >
      <View className="mt-10">
        <Image
          className="bg-black w-40 h-40 rounded-full mx-auto"
          source={require('../../assets/users/defaultUser.jpg')}
        />
        <View className="mt-4">
          <Text
            className="text-2xl text-dark-gray text-center px-4"
            style={{ fontFamily: "UrbanistBold" }}
          >
            {userCtx.userInfo.name}
          </Text>
          <Text
            className="text-lg text-dark-gray text-center px-4"
            style={{ fontFamily: "UrbanistMedium" }}
          >
            {userCtx.userInfo.email}
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
            <Image
              className="w-40 h-40"
              source={{
                uri: userCtx.userInfo.qrCodePath,
              }}
            />
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{ fontFamily: "UrbanistBold" }}
                className="text-center mt-4 py-2 rounded-md bg-dark-gray text-white"
              >
                CERRAR
              </Text>
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
          <Pressable onPress={() => userCtx.logout()}>
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

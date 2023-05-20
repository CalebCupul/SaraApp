import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { QrCodeIcon } from "react-native-heroicons/outline";
import { createRecord } from "../api/recordsApi";

function QrCodeScanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

   const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const response = await createRecord(props.token, props.eventId, data)
    alert(response.message);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View className="flex flex-1 flex-col-reverse">
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Pressable onPress={() => setScanned(false)}>
          <View className="w-48 mb-5 mx-auto py-1 flex flex-row space-x-1 rounded-full bg-dark-gray items-center justify-center">
            <Text
              style={{ fontFamily: "UrbanistBold" }}
              className="text-white"
            >
              Generar constancia
            </Text>
            <QrCodeIcon color={"white"} width={16} />
          </View>
        </Pressable>
      )}
    </View>
  );
}

export default QrCodeScanner;

import { ActivityIndicator, Text, View } from 'react-native';

function LoadingOverlay({ message }) {
  return (
    <View className="flex flex-1 justify-center items-center bg-white">
      <Text style={{ fontFamily: "UrbanistBold" }} className="text-dark-gray text-xl">{message}</Text>
      <ActivityIndicator size="large" color={'#1C1C1E'}/>
    </View>
  );
}

export default LoadingOverlay;
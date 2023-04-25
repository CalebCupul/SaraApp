import { FlatList, Text, View } from "react-native";
import RecordItem from "../../components/records/RecordItem";

function RecordsScreen() {
  return (
    <View className="p-4 bg-white">
      <Text style={{ fontFamily: "UrbanistBold" }} className="text-lg">
        10 Constancias
      </Text>
      <FlatList
      data={events}
      renderItem={({ item }) => <RecordItem event={item} />}
      keyExtractor={(item) => item.id.toString()}
      // onEndReached={fetchEvents}
      // onEndReachedThreshold={0.1}
      />
    </View>
  );
}

export default RecordsScreen;

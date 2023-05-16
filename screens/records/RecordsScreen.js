import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { getRecords } from "../../api/recordsApi";
import RecordItem from "../../components/records/RecordItem";
import { UserContext } from "../../contexts/UserContext";

function RecordsScreen() {
  const userCtx = useContext(UserContext);
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [maxPages, setMaxPages] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);
  const fetchRecords = async () => {
    if (loading || (maxPages !== null && currentPage > maxPages)) {
      return;
    }

    setLoading(true);
    try {
      const response = await getRecords(
        currentPage,
        userCtx.token,
        userCtx.userInfo.email
      );
      if (!maxPages) {
        setMaxPages(response.meta.last_page);
      }

      setRecords((prevRecords) => [...prevRecords, ...response.data]);
      setCurrentPage((currentPage) => currentPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    // PENDIENTE: CREAR LIST FOOTER COMPONENT PARA REUTILIZAR, AGREGARLE PADDING SOBRE ESTE COMPONENTE
    // Pressable sobre componente, sobre icono preparar descarga, sobre card redireccionar a constancia detail data: evento y constancia
    <View className="p-4">
      {records.length > 0 && (
        <Text style={{ fontFamily: "UrbanistBold" }} className="text-lg mb-2">
          {records.length + " constancias"}
        </Text>
      )}
      <FlatList
        className="p-4 bg-white rounded-md"
        data={records}
        ItemSeparatorComponent={
          <View
            style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
            className="my-4 self-center"
          />
        }
        renderItem={({ item }) => <RecordItem event={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={fetchRecords}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => {
          if (loading) {
            return (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="mt-4 pb-16"
              />
            );
          } else if (currentPage > maxPages) {
            return (
              <View className="pb-16">
                <Text>No more events to fetch</Text>
              </View>
            );
          } else {
            return null;
          }
        }}
      />
    </View>
  );
}

export default RecordsScreen;

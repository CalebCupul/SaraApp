import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { getRecords } from "../../api/recordsApi";
import RecordItem from "../../components/records/RecordItem";
import { UserContext } from "../../contexts/UserContext";
function RecordsScreen() {
  const userCtx = useContext(UserContext);
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [maxPages, setMaxPages] = useState(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);

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
        userCtx.userInfo.code
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
      setInitialFetchComplete(true);
    }
  };

  async function handleOnRefresh() {
    setLoading(true);
    try {
      const response = await getRecords(
        1,
        userCtx.token,
        userCtx.userInfo.code
      );
      setMaxPages(response.meta.last_page);
      setRecords([...response.data]);
      setCurrentPage(2);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="pt-14">
      {initialFetchComplete ? (
        records.length > 0 ? (
          <View className="p-4">
            <Text
              style={{ fontFamily: "UrbanistBold" }}
              className="text-lg mb-2"
            >
              {records.length + " constancias"}
            </Text>
            <FlatList
              className="p-4 bg-white rounded-md"
              data={records}
              ItemSeparatorComponent={
                <View
                  style={{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "#C8C8C8",
                  }}
                  className="my-4 self-center"
                />
              }
              renderItem={({ item }) => <RecordItem event={item} />}
              keyExtractor={(item) => item.id.toString()}
              onEndReached={fetchRecords}
              onEndReachedThreshold={0.1}
              refreshing={loading}
              onRefresh={() => handleOnRefresh()}
            />
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => handleOnRefresh()}
              />
            }
            className="h-full bg-white"
            contentContainerStyle={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View className="">
              <Text
                style={{ fontFamily: "UrbanistBold" }}
                className="text-lg text-center"
              >
                Parece que aún no tienes constancias.
              </Text>
              <Text
                style={{ fontFamily: "UrbanistBold" }}
                className="text-lg mb-2 text-center"
              >
                ¡Asiste a los eventos universitarios y obtén una!
              </Text>
              <Image
                className="w-72 h-72 mx-auto"
                style={{ resizeMode: "contain" }}
                source={require('../../assets/shared/noRecords.png')}
              />
            </View>
          </ScrollView>
        )
      ) : null}
    </View>
  );
}

export default RecordsScreen;

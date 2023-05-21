import * as Crypto from "expo-crypto";
import { useContext, useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { getEvents } from "../../api/eventsApi";
import EventItem from "../../components/events/EventItem";
import { UserContext } from "../../contexts/UserContext";

function EventsScreen() {
  const userCtx = useContext(UserContext);

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [maxPages, setMaxPages] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    
    if (loading || (maxPages !== null && currentPage > maxPages)) {
      console.log("inside if with loading: " + loading);
      return;
    }

    setLoading(true);
    try {
      const response = await getEvents(currentPage, userCtx.token);
      if (!maxPages) {
        setMaxPages((prevMaxPages) => response.meta.last_page);
      }
      setEvents((prevEvents) => [...prevEvents, ...response.data]);
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // FOR LATER: REFACTOR THIS FUNCTION
  async function handleOnRefresh() {
    setLoading(true);
    try {
      const response = await getEvents(1, userCtx.token);
      setMaxPages(response.meta.last_page);
      setEvents([...response.data]);
      setCurrentPage(2);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View className="pt-14">
        <View className="flex-row p-4 space-x-2">
          <View className="bg-white p-2 rounded-md flex-1 flex-row space-x-2">
            <MagnifyingGlassIcon color="#1C1C1E" />
            <TextInput placeholder="Buscar eventos" />
          </View>
          <View className="bg-white rounded-md">
            <Pressable android_ripple={{ color: "gray", borderless: true }}>
              <View className="p-2">
                <AdjustmentsHorizontalIcon
                  color="#1C1C1E"
                  width={26}
                  height={26}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View className="px-4 pb-56">
          <Text className="text-lg" style={{ fontFamily: "UrbanistBold" }}>
            ¡Bienvenido de vuelta,{" "}
            {userCtx.userInfo.name && (
              <Text
                className="text-lg capitalize"
                style={{ fontFamily: "UrbanistBold" }}
              >
                {userCtx.userInfo.name.split(" ")[0]}
              </Text>
            )}
            !
          </Text>
          <FlatList
            data={events}
            renderItem={({ item }) => <EventItem event={item} />}
            keyExtractor={(item) => Crypto.randomUUID()}
            onEndReached={fetchEvents}
            onEndReachedThreshold={0.1}
            refreshing={loading}
            onRefresh={() => handleOnRefresh()}
          />
        </View>
      </View>
    </>
  );
}

export default EventsScreen;

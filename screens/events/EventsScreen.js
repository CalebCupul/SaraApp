import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { getEvents } from "../../api/eventsApi";
import EventItem from "../../components/events/EventItem";
import { UserContext } from "../../contexts/UserContext";

function EventsScreen() {
  const userCtx = useContext(UserContext)

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [maxPages, setMaxPages] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    if (loading || (maxPages !== null && currentPage > maxPages)) {
      return;
    }
    setLoading(true);
    try {
      // console.log(currentPage)
      const response = await getEvents(currentPage, userCtx.token);
      if (!maxPages) {
        setMaxPages(response.last_page);
      }

      setEvents((prevEvents) => [...prevEvents, ...response.data]);
      setCurrentPage((currentPage) => currentPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
      <View className="px-4 pb-28">
        <Text className="text-lg" style={{ fontFamily: "UrbanistBold" }}>
          Open job for you
        </Text>
        <FlatList
          data={events}
          renderItem={({ item }) => <EventItem event={item} />}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={fetchEvents}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => {
            if (loading) {
              return (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  className="mt-4"
                />
              );
            } else if (currentPage > maxPages) {
              return (
                <View>
                  <Text>No more events to fetch</Text>
                </View>
              );
            } else {
              return null;
            }
          }}
        />
      </View>
    </>
  );
}

export default EventsScreen;

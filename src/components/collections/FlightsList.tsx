import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Avatar, Card, Divider, Text } from "react-native-paper";
import { spacing } from "~/constants/design";
import { useFlightSearchStore } from "~/src/store/useFlightSearchStore";
import {
  FlightItinerary,
  FlightMarketingCarrier,
} from "~/src/types/searched-flights-response"; // adjust path as needed
import { HPX } from "~/src/utils";
import ActivityIndicator from "../ui/ActivityIndicator";

const FlightsList = () => {
  const { data, loading, error } = useFlightSearchStore();

  if (loading) return <ActivityIndicator text="Fetching Flights..." />;
  if (error)
    return <Text variant="labelSmall">{JSON.stringify(error, null, 2)}</Text>;

  const itineraries = data?.data?.itineraries ?? [];

  const renderItem = ({ item }: { item: FlightItinerary }) => {
    const leg = item.legs[0];
    const marketingCarrier: FlightMarketingCarrier | undefined =
      leg.carriers.marketing?.[0];

    const origin = leg.origin.displayCode;
    const destination = leg.destination.displayCode;

    const departureTime = new Date(leg.departure).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const arrivalTime = new Date(leg.arrival).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <Card style={styles.card} mode="outlined">
        <Card.Title
          title={`${origin} → ${destination}`}
          subtitle={`${departureTime} - ${arrivalTime}`}
          left={(props) =>
            marketingCarrier?.logoUrl ? (
              <Avatar.Image
                {...props}
                source={{ uri: marketingCarrier.logoUrl }}
                size={40}
              />
            ) : (
              <Avatar.Icon {...props} icon="airplane" />
            )
          }
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Stops: {leg.stopCount === 0 ? "Direct" : `${leg.stopCount} Stop(s)`}
          </Text>
          <Text variant="titleMedium" style={styles.price}>
            {item.price.formatted}
          </Text>
        </Card.Content>
      </Card>
    );
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Avatar.Icon icon="airplane-off" size={64} />
      <Text variant="titleMedium" style={styles.emptyText}>
        No flights found
      </Text>
      <Text variant="bodySmall" style={styles.emptySubText}>
        Try changing your filters or search criteria.
      </Text>
    </View>
  );

  return (
    <FlatList
      scrollEnabled={false}
      data={itineraries}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <Divider style={styles.separator} />}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: HPX(100),
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  emptyContainer: {
    alignItems: "center",
  },
  emptyText: {
    marginTop: 12,
    fontWeight: "600",
  },
  emptySubText: {
    marginTop: 4,
    color: "#777",
    textAlign: "center",
  },
  card: {},
  price: {
    marginTop: 8,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: spacing.md,
    height: 1.4,
  },
});

export default FlightsList;

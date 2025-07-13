import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { List, Text, TextInput, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RECENT_PLACES, SUGGESTED_PLACES } from "~/constants/DATA";
import { radius, spacing } from "~/constants/design";
import { Icon } from "~/src/components";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import { useMainNavigation } from "~/src/hooks/main/useMainNavigation";
import { useMainRoute } from "~/src/hooks/main/useMainRoute";
import { usePlacesStore } from "~/src/store";
import { HPX } from "~/src/utils";

const currentLocation = {
  code: "KHI",
  city: "Karachi",
  country: "Pakistan",
  airport: "Jinnah International Airport",
};

const FormScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const navigation = useMainNavigation();
  const route = useMainRoute<"form">();
  const [search, setSearch] = useState("");
  const { setFrom, setTo } = usePlacesStore();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSelect = (item: (typeof SUGGESTED_PLACES)[0]) => {
    if (route.params.type === "FROM") {
      setFrom(item.city);
    } else if (route.params.type === "TO") {
      setTo(item.city);
    }
    navigation.goBack(); // or use navigation.navigate with params
  };

  const filteredSuggestions = SUGGESTED_PLACES.filter((item) =>
    `${item.city} ${item.code} ${item.airport}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.closeBtn} onPress={handleGoBack}>
          <Icon
            type="MaterialCommunityIcons"
            name="close"
            size={HPX(30)}
            color={theme.colors.primary}
          />
        </Pressable>
        <Text variant="titleMedium">{route?.params?.title}</Text>
      </View>

      <TextInput
        mode="outlined"
        placeholder="Search for city or airport"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
        clearButtonMode="while-editing"
        left={
          <TextInput.Icon icon="map-marker" color={theme.colors.onBackground} />
        }
      />

      <View style={{ paddingBottom: spacing.xl }}>
        {/* Current location */}
        {!search && (
          <List.Section>
            <List.Subheader>Current Location</List.Subheader>
            <List.Item
              title={`${currentLocation.city} (${currentLocation.code})`}
              description={currentLocation.airport}
              left={() => <List.Icon icon="crosshairs-gps" />}
              onPress={() => handleSelect(currentLocation)}
            />
          </List.Section>
        )}
        {/* Recent Places */}
        {!search && RECENT_PLACES.length > 0 && (
          <List.Section>
            <List.Subheader>Recent Places</List.Subheader>
            {RECENT_PLACES.map((item) => (
              <List.Item
                key={item.code}
                title={`${item.city} (${item.code})`}
                description={item.airport}
                left={() => <List.Icon icon="history" />}
                onPress={() => handleSelect(item)}
              />
            ))}
          </List.Section>
        )}

        {/* Suggested Places */}
        {filteredSuggestions.length > 0 && (
          <List.Section>
            <List.Subheader>Suggested Places</List.Subheader>
            {filteredSuggestions.map((item) => (
              <List.Item
                key={item.code}
                title={`${item.city} (${item.code})`}
                description={item.airport}
                left={() => <List.Icon icon="airplane" />}
                onPress={() => handleSelect(item)}
              />
            ))}
          </List.Section>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default FormScreen;

const useStyles = () => {
  const theme = useTheme();
  const safeInsets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      paddingHorizontal: spacing.md,
    },
    headerContainer: {
      height: HPX(40),
      alignItems: "center",
      flexDirection: "row",
      gap: spacing.sm,
    },
    closeBtn: {},
    searchInput: {
      height: HPX(44),
      borderRadius: radius.md,
      marginVertical: spacing.sm,
    },
    listsContainer: {
      flex: 1,
    },
  });
};

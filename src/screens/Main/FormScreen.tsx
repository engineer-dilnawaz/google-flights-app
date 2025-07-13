import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RECENT_PLACES, SUGGESTED_PLACES } from "~/constants/DATA";
import { radius, spacing } from "~/constants/design";
import { Icon } from "~/src/components";
import ToFrom from "~/src/components/collections/ToFrom";
import Travllers from "~/src/components/collections/Travllers";
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

const TRAVELLERS = "Travellers";

const FormScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const navigation = useMainNavigation();
  const route = useMainRoute<"form">();
  const [search, setSearch] = useState(route.params.selected ?? "");
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
    navigation.goBack();
  };

  const handleOnTravellersDone = () => {
    navigation.goBack();
  };

  const filteredSuggestions = [...RECENT_PLACES, ...SUGGESTED_PLACES].filter(
    (item) =>
      `${item.city} ${item.code} ${item.airport}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const isTravellers =
    route?.params?.title.toLocaleLowerCase() === TRAVELLERS.toLocaleLowerCase();

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

      {isTravellers ? (
        <Travllers onDone={handleOnTravellersDone} />
      ) : (
        <ToFrom
          searchedValue={search}
          setSearchedValue={setSearch}
          currentLocationList={[currentLocation]}
          recentPlacesList={RECENT_PLACES}
          suggestedPlacesList={filteredSuggestions}
          handleSelect={handleSelect}
        />
      )}
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
      paddingBottom: spacing.xl,
    },
  });
};

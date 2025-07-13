import React, { Fragment, useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { radius, spacing } from "~/constants/design";
import { FullScreenLoader, Icon } from "~/src/components";
import ToFrom from "~/src/components/collections/ToFrom";
import Travllers from "~/src/components/collections/Travllers";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import { useSuggestedPlaces } from "~/src/hooks/api/useSuggestedPlaces";
import { useMainNavigation } from "~/src/hooks/main/useMainNavigation";
import { useMainRoute } from "~/src/hooks/main/useMainRoute";
import { usePlacesStore } from "~/src/store";
import { useSuggestedPlacesStore } from "~/src/store/searchedPlacesStore";
import { PlaceItem } from "~/src/types/place";
import { HPX } from "~/src/utils";

const currentLocation = {
  presentation: {
    title: "Karachi",
    suggestionTitle: "Jinnah International Airport (KHI)",
    subtitle: "Pakistan",
  },
  navigation: {
    entityId: "123456",
    entityType: "AIRPORT",
    localizedName: "Karachi",
    relevantFlightParams: {
      skyId: "KHI",
      entityId: "123456",
      flightPlaceType: "AIRPORT",
      localizedName: "Karachi",
    },
    relevantHotelParams: {
      entityId: "123456",
      entityType: "CITY",
      localizedName: "Karachi",
    },
  },
  skyId: "KHI",
  entityId: "123456",
};

const TRAVELLERS = "Travellers";

const FormScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const navigation = useMainNavigation();
  const route = useMainRoute<"form">();
  const [search, setSearch] = useState(route.params.selected ?? "");
  const { setFrom, setTo, setOrigin, setDestination } = usePlacesStore();
  const { suggestedPlaces, recentSearches, setRecentSearches } =
    useSuggestedPlacesStore();
  const { loading, fetchPlaces } = useSuggestedPlaces();

  useEffect(() => {
    if (route.params.type === "TO") {
      fetchPlaces("usa");
    } else {
      fetchPlaces("germany");
    }
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSelect = (item: PlaceItem) => {
    setRecentSearches(item);
    if (route.params.type === "FROM") {
      setFrom(item.presentation.title);
      setOrigin(item);
    } else if (route.params.type === "TO") {
      setTo(item.presentation.title);
      setDestination(item);
    }
    navigation.goBack();
  };

  const handleOnTravellersDone = () => {
    navigation.goBack();
  };

  const filteredSuggestions = suggestedPlaces.filter((item) => {
    const content = `${item.presentation.title} ${item.presentation.suggestionTitle} ${item.presentation.subtitle}`;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  const isTravellers =
    route?.params?.title.toLocaleLowerCase() === TRAVELLERS.toLocaleLowerCase();

  let content = (
    <Fragment>
      {isTravellers ? (
        <Travllers onDone={handleOnTravellersDone} />
      ) : (
        <ToFrom
          searchedValue={search}
          setSearchedValue={setSearch}
          currentLocationList={[currentLocation]}
          recentPlacesList={recentSearches}
          suggestedPlacesList={filteredSuggestions}
          handleSelect={handleSelect}
        />
      )}
    </Fragment>
  );

  if (loading && !isTravellers) {
    content = (
      <View style={styles.loaderContainer}>
        <FullScreenLoader />
      </View>
    );
  }

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
      {content}
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
    loaderContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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

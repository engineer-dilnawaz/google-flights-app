import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { radius, spacing } from "~/constants/design";
import { PlaceItem } from "~/src/types/place";
import { HPX } from "~/src/utils";
import SectionList from "../ui/SectionList";

type ToFromProps = {
  searchedValue: string;
  setSearchedValue: (text: string) => void;
  currentLocationList: PlaceItem[];
  recentPlacesList: PlaceItem[];
  suggestedPlacesList: PlaceItem[];
  handleSelect: (item: PlaceItem) => void;
};

const ToFrom = ({
  searchedValue,
  setSearchedValue,
  currentLocationList,
  recentPlacesList,
  suggestedPlacesList,
  handleSelect,
}: ToFromProps) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <Fragment>
      <TextInput
        mode="outlined"
        placeholder="Search for city or airport"
        value={searchedValue}
        onChangeText={setSearchedValue}
        style={styles.searchInput}
        clearButtonMode="while-editing"
        left={
          <TextInput.Icon icon="map-marker" color={theme.colors.onBackground} />
        }
      />

      <View style={styles.listsContainer}>
        {/* Current location */}
        <SectionList
          label="Current Location"
          list={currentLocationList}
          onPress={handleSelect}
          icon="crosshairs-gps"
          showList={!searchedValue}
        />

        {/* Recent Places */}
        <SectionList
          label="Recent Searches"
          list={recentPlacesList}
          onPress={handleSelect}
          icon="history"
          showList={!searchedValue && recentPlacesList.length > 0}
        />

        {/* Suggested Places */}
        <SectionList
          label="Suggested Places"
          list={suggestedPlacesList}
          onPress={handleSelect}
          icon="airplane"
        />
      </View>
    </Fragment>
  );
};

export default ToFrom;

const useStyles = () => {
  return StyleSheet.create({
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

import { format } from "date-fns";
import React, { Fragment, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  Divider,
  SegmentedButtons,
  Switch,
  Text,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import {
  DatePickerModal,
  en,
  registerTranslation,
} from "react-native-paper-dates";

import { radius, spacing } from "~/constants/design";
import { FLIGHTS_SORT_BY } from "~/constants/SORT_BY";
import { getConfigResponse } from "~/mock/get-config-response";
import { Icon } from "~/src/components";
import { cabinOptions } from "~/src/components/collections";
import FlightsList from "~/src/components/collections/FlightsList";
import CityInput from "~/src/components/ui/CityInput";
import DateInput from "~/src/components/ui/DateInput";
import IconText from "~/src/components/ui/IconText";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import { useMainNavigation } from "~/src/hooks/main/useMainNavigation";
import { usePlacesStore } from "~/src/store";
import { useFlightSearchStore } from "~/src/store/useFlightSearchStore";
import { HPX, WPX } from "~/src/utils";

registerTranslation("en", en);

const segmentButtons = [
  { value: "return", label: "Return" },
  { value: "one-way", label: "One way" },
  // { value: "multi-city", label: "Multi-city" },
];

const HomeScreen = () => {
  const theme = useTheme();
  const styles = useStyles();
  const navigation = useMainNavigation();

  const [tripType, setTripType] = useState("one-way");
  const [pickerOpen, setPickerOpen] = useState(false);

  const {
    from,
    to,
    departureDate,
    range,
    swapPlaces,
    setDepartureDate,
    setRange,
    resetDates,
    childrenAges,
    adults,
    cabinClass,
    directFlights,
    setDirectFlights,
    origin,
    destination,
  } = usePlacesStore();

  const { searchFlights } = useFlightSearchStore();

  const onDateConfirm = (params: any) => {
    setPickerOpen(false);
    if (tripType === "one-way" && "date" in params) {
      setDepartureDate(params.date);
    } else if ("startDate" in params && "endDate" in params) {
      setRange(params.startDate, params.endDate);
    }
  };

  const handleOnSearchPress = async () => {
    const configCountry = getConfigResponse.data.filter(
      (data) => data.country === "United States"
    )[0];
    if (origin && destination) {
      const searchFlightParams = {
        originSkyId: origin?.skyId,
        destinationSkyId: destination?.skyId,
        originEntityId: origin?.entityId,
        destinationEntityId: destination?.entityId,
        cabinClass: cabinClass,
        adults: adults,
        childrens: infantsCount,
        infants: infantsCount,
        sortBy: FLIGHTS_SORT_BY.BEST.toLowerCase(),
        currency: configCountry.currency,
        market: configCountry.market,
        countryCode: configCountry.countryCode,
        date: format(departureDate!, "yyyy-MM-dd"),
      };

      await searchFlights(searchFlightParams);
    }
  };

  const infantsCount = childrenAges.filter((age) => age === "<1").length;
  const childrenCount = childrenAges.filter((age) => age !== "<1").length;

  const hasValidDates =
    (tripType === "one-way" && !!departureDate) ||
    (tripType === "return" && !!range.startDate && !!range.endDate);

  const isSearchDisabled =
    !from || !to || !hasValidDates || adults + childrenCount < 1 || !cabinClass;

  return (
    <Fragment>
      <ScreenWrapper style={styles.container}>
        <SegmentedButtons
          value={tripType}
          onValueChange={(value) => {
            setTripType(value);
            resetDates();
          }}
          buttons={segmentButtons}
          density="small"
          style={styles.segmentButtons}
        />

        <Divider style={styles.divider} />

        <View style={styles.formContainer}>
          <CityInput
            label="From"
            value={from}
            onPress={() => {
              navigation.navigate("form", {
                title: "Where from?",
                type: "FROM",
                selected: from,
              });
            }}
            leftIcon="airplane-takeoff"
          />
          <Pressable onPress={swapPlaces} style={styles.switchContainer}>
            <Icon
              type="MaterialCommunityIcons"
              name="swap-vertical"
              size={HPX(25)}
              color={theme.colors.onPrimary}
            />
          </Pressable>

          <CityInput
            label="To"
            value={to}
            onPress={() => {
              navigation.navigate("form", {
                title: "Where to?",
                type: "TO",
                selected: to,
              });
            }}
            leftIcon="airplane-landing"
          />

          {tripType === "one-way" ? (
            <DateInput
              label="Departure date"
              value={departureDate}
              onPress={() => setPickerOpen(true)}
            />
          ) : (
            <View style={styles.dateRow}>
              <View style={styles.dateInput}>
                <DateInput
                  label="Depart"
                  value={range.startDate}
                  onPress={() => setPickerOpen(true)}
                  dateFormat="dd MMM yy"
                />
              </View>
              <View style={styles.dateInput}>
                <DateInput
                  label="Return"
                  value={range.endDate}
                  onPress={() => setPickerOpen(true)}
                  dateFormat="dd MMM yy"
                />
              </View>
            </View>
          )}

          <TouchableRipple
            onPress={() => {
              navigation.navigate("form", {
                title: "Travellers",
                type: "TRAVELLERS",
              });
            }}
            rippleColor={theme.colors.onPrimaryContainer}
            style={styles.travallersContainer}
          >
            <Fragment>
              <IconText label={adults.toString()} icon="human-male" />
              <IconText label={childrenCount.toString()} icon="human-child" />
              <IconText
                label={infantsCount.toString()}
                icon="human-female-girl"
              />
              <IconText
                label={
                  cabinOptions.filter((cb) => cb.value === cabinClass)[0].label
                }
                icon="chevron-down"
              />
            </Fragment>
          </TouchableRipple>

          <Pressable
            onPress={() => setDirectFlights(!directFlights)}
            style={styles.directFlightsContainer}
          >
            <Switch value={directFlights} onValueChange={setDirectFlights} />
            <Text variant="bodyMedium">Direct Flights Only</Text>
          </Pressable>
          <Divider style={[styles.divider, { marginTop: 0 }]} />
          <Pressable
            onPress={handleOnSearchPress}
            style={[
              styles.searchBtn,
              {
                backgroundColor: isSearchDisabled
                  ? theme.colors.surfaceDisabled
                  : theme.colors.primary,
              },
            ]}
            disabled={isSearchDisabled}
          >
            <Icon
              type="Feather"
              name="search"
              size={HPX(30)}
              color={
                isSearchDisabled
                  ? theme.colors.onSurfaceDisabled
                  : theme.colors.onPrimary
              }
            />
          </Pressable>
        </View>

        <View style={styles.dataContainer}>
          <FlightsList />
        </View>

        {pickerOpen && (
          <DatePickerModal
            locale="en"
            mode={tripType === "return" ? "range" : "single"}
            visible={pickerOpen}
            date={departureDate}
            startDate={range.startDate}
            endDate={range.endDate}
            onDismiss={() => setPickerOpen(false)}
            onConfirm={onDateConfirm}
          />
        )}
      </ScreenWrapper>
    </Fragment>
  );
};

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: spacing.md,
      marginTop: spacing.xl,
    },
    segmentButtons: {
      alignSelf: "center",
    },
    divider: {
      marginTop: spacing.md,
      height: 1.2,
    },
    formContainer: {
      marginTop: spacing.md,
      gap: spacing.md,
    },
    dateRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: spacing.md,
    },
    dateInput: {
      flex: 1,
      overflow: "hidden",
    },
    switchContainer: {
      width: HPX(40),
      height: HPX(40),
      borderRadius: radius.full,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 0,
      top: 45,
      zIndex: 10,
    },
    travallersContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    directFlightsContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
    },
    searchBtn: {
      width: WPX(50),
      height: HPX(50),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: radius.full,

      position: "absolute",
      right: 0,
      bottom: -20,
      zIndex: 99,
    },
    dataContainer: {
      flex: 1,
      marginTop: spacing.xl,
    },
  });
};

export default HomeScreen;

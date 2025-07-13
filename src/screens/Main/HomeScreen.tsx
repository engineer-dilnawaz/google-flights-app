import React, { Fragment, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  Divider,
  SegmentedButtons,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import {
  DatePickerModal,
  en,
  registerTranslation,
} from "react-native-paper-dates";

import { radius, spacing } from "~/constants/design";
import { Icon } from "~/src/components";
import CityInput from "~/src/components/ui/CityInput";
import DateInput from "~/src/components/ui/DateInput";
import IconText from "~/src/components/ui/IconText";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import { useMainNavigation } from "~/src/hooks/main/useMainNavigation";
import { usePlacesStore } from "~/src/store";
import { HPX } from "~/src/utils";

registerTranslation("en", en);

const segmentButtons = [
  { value: "return", label: "Return" },
  { value: "one-way", label: "One way" },
  { value: "multi-city", label: "Multi-city" },
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
  } = usePlacesStore();

  const onDateConfirm = (params: any) => {
    setPickerOpen(false);
    if (tripType === "one-way" && "date" in params) {
      setDepartureDate(params.date);
    } else if ("startDate" in params && "endDate" in params) {
      setRange(params.startDate, params.endDate);
    }
  };

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
          ) : tripType === "return" ? (
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
          ) : null}

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
              <IconText label="1" icon="human-male" />
              <IconText label="1" icon="human-child" />
              <IconText label="1" icon="human-female-girl" />
              <IconText label="Business" icon="chevron-down" />
            </Fragment>
          </TouchableRipple>

          <Divider style={[styles.divider, { marginTop: 0 }]} />
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
  });
};

export default HomeScreen;

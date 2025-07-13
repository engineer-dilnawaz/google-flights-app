import { format } from "date-fns";
import React, { Fragment, useReducer, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  Divider,
  SegmentedButtons,
  TextInput,
  useTheme,
} from "react-native-paper";
import {
  DatePickerModal,
  en,
  registerTranslation,
} from "react-native-paper-dates";

import { radius, spacing } from "~/constants/design";
import { Icon } from "~/src/components";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import { useMainNavigation } from "~/src/hooks/main/useMainNavigation";
import { usePlacesStore } from "~/src/store";
import { PlaceType } from "~/src/types/place";
import { HPX } from "~/src/utils";

registerTranslation("en", en);

const segmentButtons = [
  { value: "return", label: "Return" },
  { value: "one-way", label: "One way" },
  { value: "multi-city", label: "Multi-city" },
];

// Define the state shape
type State = {
  from: string;
  to: string;
  departureDate?: Date;
  range: {
    startDate?: Date;
    endDate?: Date;
  };
};

// Define possible actions
type Action =
  | { type: "SET_FROM"; payload: string }
  | { type: "SET_TO"; payload: string }
  | { type: "SWAP_FROM_TO" }
  | { type: "SET_DEPARTURE_DATE"; payload?: Date }
  | { type: "SET_RANGE"; payload: { startDate?: Date; endDate?: Date } }
  | { type: "RESET_DATES" };

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FROM":
      return { ...state, from: action.payload };
    case "SET_TO":
      return { ...state, to: action.payload };
    case "SWAP_FROM_TO":
      return { ...state, from: state.to, to: state.from };
    case "SET_DEPARTURE_DATE":
      return { ...state, departureDate: action.payload };
    case "SET_RANGE":
      return { ...state, range: { ...action.payload } };
    case "RESET_DATES":
      return {
        ...state,
        departureDate: undefined,
        range: { startDate: undefined, endDate: undefined },
      };

    default:
      return state;
  }
}

const HomeScreen = () => {
  const theme = useTheme();
  const styles = useStyles();
  const navigation = useMainNavigation();

  const [tripType, setTripType] = useState("one-way");
  const { from, to, swapPlaces } = usePlacesStore();

  // Use reducer to manage all form inputs and dates
  const [state, dispatch] = useReducer(reducer, {
    from: "",
    to: "",
    departureDate: undefined,
    range: { startDate: undefined, endDate: undefined },
  });

  const [pickerOpen, setPickerOpen] = useState(false);

  // Handlers for text inputs
  const onFromChange = (text: string) =>
    dispatch({ type: "SET_FROM", payload: text });
  const onToChange = (text: string) =>
    dispatch({ type: "SET_TO", payload: text });
  const onSwap = () => {
    dispatch({ type: "SWAP_FROM_TO" });
    swapPlaces();
  };

  // Handle date confirm
  const onDateConfirm = (params: any) => {
    setPickerOpen(false);
    if (tripType === "one-way" && "date" in params) {
      dispatch({ type: "SET_DEPARTURE_DATE", payload: params.date });
    } else if ("startDate" in params && "endDate" in params) {
      dispatch({
        type: "SET_RANGE",
        payload: { startDate: params.startDate, endDate: params.endDate },
      });
    }
  };

  const onSelectPlace = (place: PlaceType) => {
    console.log("Parent", place);
  };

  console.log(from, to);

  return (
    <Fragment>
      <ScreenWrapper style={styles.container}>
        <SegmentedButtons
          value={tripType}
          onValueChange={(value) => {
            setTripType(value);
            dispatch({ type: "RESET_DATES" });
          }}
          buttons={segmentButtons}
          density="small"
          style={styles.segmentButtons}
        />

        <Divider style={styles.divider} />

        <View style={styles.formContainer}>
          <TextInput
            mode="outlined"
            label="From"
            value={state.from}
            editable={false}
            onChangeText={onFromChange}
            onPress={() => {
              navigation.navigate("form", {
                title: "Where from?",
                type: "FROM",
              });
            }}
            left={
              <TextInput.Icon
                icon="airplane-landing"
                size={HPX(20)}
                color={theme.colors.onSurfaceDisabled}
              />
            }
          />

          <Pressable onPress={onSwap} style={styles.switchContainer}>
            <Icon
              type="MaterialCommunityIcons"
              name="swap-vertical"
              size={HPX(25)}
              color={theme.colors.onPrimary}
            />
          </Pressable>

          <TextInput
            mode="outlined"
            label="To"
            value={state.to}
            editable={false}
            onChangeText={onToChange}
            onPress={() => {
              navigation.navigate("form", {
                title: "Where to?",
                type: "TO",
              });
            }}
            left={
              <TextInput.Icon
                icon="airplane-takeoff"
                size={HPX(20)}
                color={theme.colors.onSurfaceDisabled}
              />
            }
          />

          {tripType === "one-way" ? (
            <TextInput
              mode="outlined"
              label="Departure date"
              value={
                state.departureDate
                  ? format(state.departureDate, "dd MMM yy")
                  : ""
              }
              editable={false}
              onPress={() => setPickerOpen(true)}
              right={
                <TextInput.Icon
                  icon={() => (
                    <Icon
                      type="MaterialCommunityIcons"
                      name="calendar-month"
                      size={HPX(20)}
                      color={theme.colors.onSurfaceDisabled}
                    />
                  )}
                  onPress={() => setPickerOpen(true)}
                />
              }
            />
          ) : tripType === "return" ? (
            <View style={styles.dateRow}>
              <View style={styles.dateInput}>
                <TextInput
                  mode="outlined"
                  label="Depart"
                  value={
                    state.range.startDate
                      ? format(state.range.startDate, "dd MMM yy")
                      : ""
                  }
                  editable={false}
                  onPress={() => setPickerOpen(true)}
                  right={
                    <TextInput.Icon
                      icon={() => (
                        <Icon
                          type="MaterialCommunityIcons"
                          name="calendar-month"
                          size={HPX(20)}
                          color={theme.colors.onSurfaceDisabled}
                        />
                      )}
                      onPress={() => setPickerOpen(true)}
                    />
                  }
                />
              </View>
              <View style={styles.dateInput}>
                <TextInput
                  mode="outlined"
                  label="Return"
                  value={
                    state.range.endDate
                      ? format(state.range.endDate, "dd MMM yy")
                      : ""
                  }
                  editable={false}
                  onPress={() => setPickerOpen(true)}
                  right={
                    <TextInput.Icon
                      icon={() => (
                        <Icon
                          type="MaterialCommunityIcons"
                          name="calendar-month"
                          size={HPX(20)}
                          color={theme.colors.onSurfaceDisabled}
                        />
                      )}
                      onPress={() => setPickerOpen(true)}
                    />
                  }
                />
              </View>
            </View>
          ) : null}

          <Divider style={styles.divider} />
        </View>

        {pickerOpen && (
          <DatePickerModal
            locale="en"
            mode={tripType === "return" ? "range" : "single"}
            visible={pickerOpen}
            date={state.departureDate}
            startDate={state.range.startDate}
            endDate={state.range.endDate}
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
  });
};

export default HomeScreen;

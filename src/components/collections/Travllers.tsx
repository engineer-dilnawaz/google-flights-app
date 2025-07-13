import React, { Fragment, useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Divider, Text, useTheme } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { spacing } from "~/constants/design";
import { usePlacesStore } from "~/src/store";
import { HPX } from "~/src/utils";
import CounterButtons from "../ui/CounterButtons";

const cabinOptions = [
  { label: "Economy", value: "Economy" },
  { label: "Premium Economy", value: "Premium Economy" },
  { label: "Business", value: "Business" },
  { label: "First", value: "First" },
];

const childAgeOptions = [
  { label: "<1 year old", value: "<1" },
  ...Array.from({ length: 17 }, (_, i) => ({
    label: `${i + 1} years old`,
    value: `${i + 1}`,
  })),
];

// -----------------------------
// Reducer Setup
// -----------------------------

type State = {
  cabinClass: string;
  adults: number;
  children: number;
  childrenAges: string[];
};

type Action =
  | { type: "SET_CABIN_CLASS"; payload: string }
  | { type: "SET_ADULTS"; payload: number }
  | { type: "SET_CHILDREN"; payload: number }
  | { type: "SET_CHILD_AGE"; index: number; value: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CABIN_CLASS":
      return { ...state, cabinClass: action.payload };
    case "SET_ADULTS":
      return { ...state, adults: action.payload };
    case "SET_CHILDREN": {
      const newChildrenAges = [...state.childrenAges];
      const diff = action.payload - state.children;
      if (diff > 0) {
        newChildrenAges.push(...Array(diff).fill("<1"));
      } else if (diff < 0) {
        newChildrenAges.splice(diff);
      }
      return {
        ...state,
        children: action.payload,
        childrenAges: newChildrenAges,
      };
    }
    case "SET_CHILD_AGE": {
      const updated = [...state.childrenAges];
      updated[action.index] = action.value;
      return { ...state, childrenAges: updated };
    }
    default:
      return state;
  }
};

type TravllersProps = {
  onDone: () => void;
};

const Travllers = ({ onDone }: TravllersProps) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    cabinClass: storeCabinClass,
    setCabinClass,
    adults: storeAdults,
    setAdults,
    children: storeChildren,
    setChildren,
    childrenAges: storeChildrenAges,
    setChildrenAges,
  } = usePlacesStore();

  const [state, dispatch] = useReducer(reducer, {
    cabinClass: storeCabinClass,
    adults: storeAdults,
    children: storeChildren,
    childrenAges: storeChildrenAges.length
      ? storeChildrenAges
      : Array(storeChildren).fill("<1"),
  });

  const handleDone = () => {
    setCabinClass(state.cabinClass);
    setAdults(state.adults);
    setChildren(state.children);
    setChildrenAges(state.childrenAges);
    onDone();
  };

  return (
    <Fragment>
      <View style={styles.container}>
        {/* Cabin Class */}
        <View style={styles.sectionContainer}>
          <Text variant="titleMedium">Cabin class</Text>
          <Dropdown
            mode={"outlined"}
            value={state.cabinClass}
            onSelect={(value) =>
              value && dispatch({ type: "SET_CABIN_CLASS", payload: value })
            }
            options={cabinOptions}
            hideMenuHeader
          />
        </View>

        <Divider style={styles.divider} />

        {/* Adults */}
        <View style={[styles.sectionContainer, styles.adultsContainer]}>
          <View>
            <Text variant="titleMedium">Adults</Text>
            <Text variant="labelSmall">18+ years</Text>
          </View>
          <CounterButtons
            counter={state.adults}
            onIncrease={() =>
              dispatch({ type: "SET_ADULTS", payload: state.adults + 1 })
            }
            onDecrease={() =>
              dispatch({
                type: "SET_ADULTS",
                payload: Math.max(1, state.adults - 1),
              })
            }
          />
        </View>

        <Divider style={styles.divider} />

        {/* Children */}
        <View
          style={[
            styles.sectionContainer,
            styles.adultsContainer,
            styles.childrenContainer,
          ]}
        >
          <View>
            <Text variant="titleMedium">Children</Text>
            <Text variant="labelSmall">0–17 years</Text>
          </View>
          <CounterButtons
            counter={state.children}
            onIncrease={() =>
              dispatch({
                type: "SET_CHILDREN",
                payload: state.children + 1,
              })
            }
            onDecrease={() =>
              dispatch({
                type: "SET_CHILDREN",
                payload: Math.max(0, state.children - 1),
              })
            }
          />
        </View>

        <Text variant="bodyMedium">
          Your age at the time of travel must be valid for the age category
          booked. Airlines have restrictions on under 18s travelling alone.
        </Text>
        <View style={styles.separator} />
        <Text variant="bodyMedium">
          Age limits and policies for travelling with children may vary, so
          please check the airline before booking.
        </Text>

        {/* Children Ages */}
        <View style={{ marginTop: spacing.sm, flex: 1, gap: spacing.sm }}>
          {state.childrenAges.map((age, index) => (
            <Dropdown
              key={index}
              label={`Child ${index + 1} Age`}
              mode="outlined"
              value={age}
              onSelect={(value) =>
                value &&
                dispatch({
                  type: "SET_CHILD_AGE",
                  index,
                  value,
                })
              }
              options={childAgeOptions}
              hideMenuHeader
            />
          ))}
        </View>

        {/* Done Button */}
        <Button
          mode="contained"
          style={styles.button}
          textColor={theme.colors.onPrimaryContainer}
          onPress={handleDone}
        >
          Done
        </Button>
      </View>
    </Fragment>
  );
};

export default Travllers;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: spacing.md,
    },
    sectionContainer: {
      gap: spacing.sm,
    },
    divider: {
      marginTop: spacing.md,
      color: theme.colors.onPrimary,
      height: 1.5,
    },
    adultsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: spacing.sm,
    },
    childrenContainer: {
      marginTop: spacing.md,
    },
    separator: {
      height: HPX(20),
    },
    button: {
      backgroundColor: theme.colors.onPrimary,
      marginTop: spacing.md,
    },
  });
};

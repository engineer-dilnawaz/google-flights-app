import { Pressable, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { radius, spacing } from "~/constants/design";
import { HPX } from "~/src/utils";
import Icon from "./Icon";

type CounterButtonsProps = {
  onIncrease: () => void;
  onDecrease: () => void;
  counter: number;
};

const CounterButtons = ({
  onIncrease,
  onDecrease,
  counter,
}: CounterButtonsProps) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.counterContainer}>
      <Pressable style={styles.counterBtn} onPress={onDecrease}>
        <Icon
          type="Feather"
          name="minus"
          size={HPX(25)}
          color={theme.colors.onBackground}
        />
      </Pressable>
      <Text variant="bodyLarge">{counter}</Text>
      <Pressable style={styles.counterBtn} onPress={onIncrease}>
        <Icon
          type="Feather"
          name="plus"
          size={HPX(25)}
          color={theme.colors.onBackground}
        />
      </Pressable>
    </View>
  );
};

export default CounterButtons;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    counterContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
    },
    counterBtn: {
      backgroundColor: theme.colors.primaryContainer,
      padding: spacing.xs,
      borderRadius: radius.md,
    },
  });
};

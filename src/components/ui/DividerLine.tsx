import { StyleSheet, View } from "react-native";
import { Divider, Text, useTheme } from "react-native-paper";

import { spacing } from "~/constants/design";

const DividerLine = () => {
  const styles = useStyles();
  return (
    <View style={styles.dividerContainer}>
      <Divider bold style={styles.divider} />
      <Text variant="bodySmall" style={styles.orText}>
        Or
      </Text>
      <Divider bold style={styles.divider} />
    </View>
  );
};

export default DividerLine;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    dividerContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
      marginTop: spacing.xl,
    },
    divider: {
      flex: 1,
      backgroundColor: theme.colors.elevation.level5,
    },
    orText: {
      color: theme.colors.onBackground,
    },
  });
};

import { StyleSheet, View } from "react-native";
import {
  ActivityIndicator as ActivityIndicatorPaper,
  Text,
  useTheme,
} from "react-native-paper";

type ActivityIndicatorProps = {
  text?: string;
  size?: "small" | "large";
};

const ActivityIndicator = ({
  text = "Loading...",
  size = "small",
}: ActivityIndicatorProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicatorPaper size={size} color={theme.colors.primary} />
      <Text variant="bodySmall">{text}</Text>
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

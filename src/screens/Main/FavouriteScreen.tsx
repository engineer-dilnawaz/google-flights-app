import { StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";

const FavourtieScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <ScreenWrapper style={[styles.container]}>
      <Text variant="headlineSmall" style={{ textAlign: "center" }}>
        Your bookmarked flights would appear here
      </Text>
    </ScreenWrapper>
  );
};

export default FavourtieScreen;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
  });
};

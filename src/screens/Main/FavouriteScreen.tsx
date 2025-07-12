import { StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";

const FavourtieScreen = () => {
  const styles = useStyles();
  return (
    <ScreenWrapper style={[styles.container]}>
      <Text>Favourtie Screen</Text>
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

import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { FullScreenLoader } from "../components";
import { useAuth } from "../store";
import AuthStack from "./auth-stack/auth-stack";
import MainStack from "./main-stack/main-stack";

const AppNavigator = () => {
  const { isLoading, isLoggedIn } = useAuth();
  const theme = useTheme();
  const styles = useStyles();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <FullScreenLoader />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
  });
};

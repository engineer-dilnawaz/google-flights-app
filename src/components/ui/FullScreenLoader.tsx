import { StyleSheet, View } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import { Lottie } from "~/assets/animations";
import { LottieAnimation } from "../LottieAnimation";

export const FullScreenLoader = () => {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <Surface style={styles.loaderContainer} elevation={4}>
        <LottieAnimation
          source={Lottie.LoadingIndicator}
          loop
          autoPlay
          resizeMode="cover"
        />
      </Surface>
    </View>
  );
};

const useStyle = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.primaryContainer,
    },
    loaderContainer: {
      padding: 8,
      height: 180,
      width: 180,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      shadowColor: theme.colors.inversePrimary,
    },
  });
};

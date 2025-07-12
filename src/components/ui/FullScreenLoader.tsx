import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import { Lottie } from "~/assets/animations";
import { LottieAnimation } from "../LottieAnimation";

export const FullScreenLoader = () => {
  const styles = useStyle();
  return (
    <Surface style={styles.loaderContainer} elevation={4}>
      <LottieAnimation
        source={Lottie.LoadingIndicator}
        loop
        autoPlay
        resizeMode="cover"
      />
    </Surface>
  );
};

const useStyle = () => {
  const theme = useTheme();
  return StyleSheet.create({
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

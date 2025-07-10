import { SafeAreaView, StyleSheet } from "react-native";

import { Lottie } from "~/assets/animations";
import { LottieAnimation } from "~/components";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieAnimation source={Lottie.SplashLogo} />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

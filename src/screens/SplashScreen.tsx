import { LottieViewProps } from "lottie-react-native";
import { SafeAreaView, StyleSheet } from "react-native";

import { Lottie } from "~/assets/animations";
import { LottieAnimation } from "~/components";

type AppSplashScreenProps = Omit<LottieViewProps, "source" | "style">;

const AppSplashScreen = (props: AppSplashScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieAnimation
        source={Lottie.SplashLogo}
        loop={false}
        resizeMode="contain"
        {...props}
      />
    </SafeAreaView>
  );
};

export default AppSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

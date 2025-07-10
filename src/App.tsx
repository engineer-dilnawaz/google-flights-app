import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import { ThemeProvider, useThemeContext } from "./store";

// Keep splash screen visible while loading
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <ThemeProvider>
      <Main onLayout={onLayoutRootView} />
    </ThemeProvider>
  );
};

const Main = ({ onLayout }: { onLayout: () => void }) => {
  const { theme } = useThemeContext();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <View style={{ flex: 1 }} onLayout={onLayout}>
          <HomeScreen />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

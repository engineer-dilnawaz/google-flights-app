import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import { ThemeProvider, useThemeContext } from "./store";
import { CustomTheme } from "./types/theme";

const App = () => {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

const Main = () => {
  const { theme } = useThemeContext();

  return (
    <PaperProvider theme={theme as CustomTheme}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <HomeScreen />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

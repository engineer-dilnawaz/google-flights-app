import { useFonts } from "expo-font";
import React from "react";
import { Text, View } from "react-native";

const App = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

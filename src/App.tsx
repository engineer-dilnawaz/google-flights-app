import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import AppNavigator from "./navigation/main-navgiator";
import { ThemeProvider, useThemeContext } from "./store";

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

const Main = () => {
  const { theme } = useThemeContext();

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;

import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import AppNavigator from "./navigation/main-navgiator";
import { AuthProvider, ThemeProvider, useThemeContext } from "./store";

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
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;

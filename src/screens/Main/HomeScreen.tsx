import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import { useAuth, useThemeContext } from "../../store";

const HomeScreen = () => {
  const { toggleTheme } = useThemeContext();
  const { user } = useAuth();

  const theme = useTheme();

  return (
    <ScreenWrapper style={[styles.container]}>
      <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
        Hello, {user?.name}!
      </Text>
      <Button mode="contained" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default HomeScreen;

import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useThemeContext } from "../store";

const HomeScreen = () => {
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
        Hello, Theme!
      </Text>
      <Button mode="contained" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
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

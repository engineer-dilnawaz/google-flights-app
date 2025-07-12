import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "~/hooks/useAppTheme";
import { Button } from "./Button";

export const ButtonDemo: React.FC = () => {
  const theme = useAppTheme();

  const handlePress = (variant: string, size: string) => {
    console.log(`Pressed ${variant} ${size} button`);
  };

  const renderButtonSection = (
    title: string,
    variant: "default" | "rounded" | "outline" | "roundedOutline"
  ) => (
    <View style={styles.section}>
      <Text
        variant="titleMedium"
        style={[styles.sectionTitle, { color: theme.colors.onSurface }]}
      >
        {title}
      </Text>
      <View style={styles.buttonRow}>
        <Button
          title="Big"
          onPress={() => handlePress(variant, "big")}
          variant={variant}
          size="big"
        />
        <Button
          title="Medium"
          onPress={() => handlePress(variant, "medium")}
          variant={variant}
          size="medium"
        />
        <Button
          title="Small"
          onPress={() => handlePress(variant, "small")}
          variant={variant}
          size="small"
        />
      </View>
    </View>
  );

  const renderIconButtonSection = (
    title: string,
    variant: "default" | "rounded" | "outline" | "roundedOutline"
  ) => (
    <View style={styles.section}>
      <Text
        variant="titleMedium"
        style={[styles.sectionTitle, { color: theme.colors.onSurface }]}
      >
        {title} with Icon
      </Text>
      <View style={styles.buttonRow}>
        <Button
          title="Big"
          onPress={() => handlePress(variant, "big")}
          variant={variant}
          size="big"
          icon={<Text style={{ color: "inherit", fontSize: 18 }}>🚀</Text>}
          iconPosition="left"
        />
        <Button
          title="Medium"
          onPress={() => handlePress(variant, "medium")}
          variant={variant}
          size="medium"
          icon={<Text style={{ color: "inherit", fontSize: 16 }}>⭐</Text>}
          iconPosition="right"
        />
        <Button
          title="Small"
          onPress={() => handlePress(variant, "small")}
          variant={variant}
          size="small"
          icon={<Text style={{ color: "inherit", fontSize: 14 }}>💡</Text>}
          iconPosition="left"
        />
      </View>
    </View>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text
        variant="headlineSmall"
        style={[styles.title, { color: theme.colors.onSurface }]}
      >
        Button Component Demo
      </Text>

      {renderButtonSection("Default Button", "default")}
      {renderButtonSection("Rounded Button", "rounded")}
      {renderButtonSection("Outline Button", "outline")}
      {renderButtonSection("Rounded Outline Button", "roundedOutline")}

      <View style={styles.divider} />

      {renderIconButtonSection("Default Button", "default")}
      {renderIconButtonSection("Rounded Button", "rounded")}
      {renderIconButtonSection("Outline Button", "outline")}
      {renderIconButtonSection("Rounded Outline Button", "roundedOutline")}

      <View style={styles.section}>
        <Text
          variant="titleMedium"
          style={[styles.sectionTitle, { color: theme.colors.onSurface }]}
        >
          Special States
        </Text>
        <View style={styles.buttonRow}>
          <Button
            title="Loading"
            onPress={() => {}}
            variant="default"
            size="medium"
            loading={true}
          />
          <Button
            title="Disabled"
            onPress={() => {}}
            variant="outline"
            size="medium"
            disabled={true}
          />
          <Button
            title="Full Width"
            onPress={() => handlePress("default", "fullWidth")}
            variant="default"
            size="medium"
            fullWidth={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 24,
  },
});

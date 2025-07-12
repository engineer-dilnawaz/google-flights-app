import { StyleSheet, View } from "react-native";
import { Button, Card, Surface, Text } from "react-native-paper";
import { useAppTheme } from "~/hooks/useAppTheme";
import { useThemeContext } from "~/store";

export default function HomeScreen() {
  const { toggleTheme } = useThemeContext();
  const theme = useAppTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card
        style={[
          styles.card,
          { backgroundColor: theme.colors.surfaceContainer },
        ]}
      >
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: theme.colors.onSurfaceContainer }}
          >
            Welcome to Your App
          </Text>
          <Text
            variant="bodyMedium"
            style={{ color: theme.colors.onSurfaceVariant }}
          >
            This card uses semantic colors that adapt to light/dark mode.
          </Text>
        </Card.Content>
      </Card>

      <Surface
        style={[
          styles.accentCard,
          { backgroundColor: theme.colors.accent.blue },
        ]}
        elevation={2}
      >
        <Text style={[styles.accentText, { color: theme.colors.onPrimary }]}>
          Custom Accent Color
        </Text>
      </Surface>

      <View style={styles.colorGrid}>
        <View
          style={[
            styles.colorSwatch,
            { backgroundColor: theme.colors.custom.blueLight[400] },
          ]}
        />
        <View
          style={[
            styles.colorSwatch,
            { backgroundColor: theme.colors.custom.purple[400] },
          ]}
        />
        <View
          style={[
            styles.colorSwatch,
            { backgroundColor: theme.colors.custom.mint[400] },
          ]}
        />
        <View
          style={[
            styles.colorSwatch,
            { backgroundColor: theme.colors.custom.pink[400] },
          ]}
        />
      </View>

      <Button
        mode="contained"
        onPress={toggleTheme}
        style={{ backgroundColor: theme.colors.primary }}
        textColor={theme.colors.onPrimary}
      >
        Toggle Theme
      </Button>

      <Text
        variant="bodySmall"
        style={[styles.footer, { color: theme.colors.onSurfaceVariant }]}
      >
        Current theme: {theme.dark ? "Dark" : "Light"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
  card: {
    marginBottom: 8,
  },
  accentCard: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  accentText: {
    fontSize: 16,
    fontWeight: "600",
  },
  colorGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  footer: {
    textAlign: "center",
    marginTop: 8,
  },
});

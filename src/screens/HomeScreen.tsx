import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useAppTheme } from "~/hooks/useAppTheme";
import { useThemeContext } from "~/store";

export default function HomeScreen() {
  const { toggleTheme } = useThemeContext();
  const theme = useAppTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={{ color: theme.colors.text }}>
            Welcome
          </Text>
          <Text variant="bodyMedium">This is a React Native Paper card.</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={toggleTheme}
        style={{ backgroundColor: theme.colors.primary }}
        textColor={theme.colors.onPrimary}
      >
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  card: { marginBottom: 16 },
});

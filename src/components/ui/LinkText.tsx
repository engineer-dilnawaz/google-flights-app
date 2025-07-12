import { StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";

type LinkTextProps = {
  text: string;
  onPress?: () => void;
};

const LinkText = ({ text, onPress }: LinkTextProps) => {
  const styles = useStyles();
  return (
    <Text variant="bodyMedium" style={styles.text} onPress={onPress}>
      {text}
    </Text>
  );
};

export default LinkText;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    text: {
      color: theme.colors.primary,
      textDecorationLine: "underline",
    },
  });
};

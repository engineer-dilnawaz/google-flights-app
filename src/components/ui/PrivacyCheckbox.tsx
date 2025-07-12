import { Pressable, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";

import { radius, spacing } from "~/constants/design";
import { HPX, WPX } from "~/src/utils/responsive";
import Icon from "./Icon";
import LinkText from "./LinkText";

type PrivacyCheckboxProps = {
  status: boolean;
  onPress?: () => void;
};

const PrivacyCheckbox = ({ status, onPress }: PrivacyCheckboxProps) => {
  const theme = useTheme();
  const styles = useStyle();
  return (
    <Pressable onPress={onPress} style={styles.termsContainer}>
      <Pressable
        onPress={onPress}
        style={[
          styles.checkboxContainer,
          {
            borderColor: status
              ? theme.colors.primary
              : theme.colors.outlineVariant,
          },
        ]}
      >
        {status && (
          <Icon
            type="MaterialCommunityIcons"
            name="check"
            size={HPX(25)}
            color={theme.colors.primary}
          />
        )}
      </Pressable>

      <Text variant="bodySmall" style={styles.textContainer}>
        I agree to The <LinkText text="Terms of Services" /> and{" "}
        <LinkText text="Privacy Policy" />
      </Text>
    </Pressable>
  );
};

export default PrivacyCheckbox;

const useStyle = () => {
  const theme = useTheme();
  return StyleSheet.create({
    termsContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: spacing.md,
    },
    checkboxContainer: {
      borderWidth: 1,
      borderRadius: radius.sm,

      height: HPX(30),
      width: WPX(30),
      marginRight: spacing.md,
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      flex: 1,
    },
  });
};

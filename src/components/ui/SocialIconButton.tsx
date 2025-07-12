import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

import { ICONS } from "~/assets/icons";
import { radius, spacing } from "~/constants/design";
import { Image } from "../Image";

type SocialIconButtonProps = {
  onPress?: () => void;
  icon: "google" | "facebook";
  title: string;
};

const SocialIconButton = ({ onPress, icon, title }: SocialIconButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      mode="contained"
      buttonColor={theme.colors.elevation.level3}
      textColor={theme.colors.shadow}
      style={styles.socialBtn}
      contentStyle={styles.btnContent}
      onPress={onPress}
    >
      <View style={styles.iconTextContainer}>
        <Image
          source={ICONS[icon]}
          contentFit={"contain"}
          style={styles.icon}
        />
        <Text variant="labelLarge">{title}</Text>
      </View>
    </Button>
  );
};

export default SocialIconButton;

const styles = StyleSheet.create({
  ssoContainer: {
    marginTop: spacing.xxl,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  socialBtn: {
    borderRadius: radius.md,
    flex: 1,
  },
  btnContent: {
    padding: spacing.sm,
  },
  iconTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

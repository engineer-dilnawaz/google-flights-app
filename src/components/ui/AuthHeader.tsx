import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { spacing } from "~/constants/design";
import DividerLine from "./DividerLine";
import SocialIconButton from "./SocialIconButton";

type AuthHeaderProps = {
  onFBPress?: () => void;
  onGooglePress?: () => void;
  title: string;
  subTitle?: string;
  hideDivider?: boolean;
};

const AuthHeader = ({
  title,
  subTitle,
  hideDivider = false,
  onFBPress,
  onGooglePress,
}: AuthHeaderProps) => {
  const styles = useStyles();
  return (
    <Fragment>
      <View style={styles.headerContainer}>
        <Text variant="headlineSmall" style={styles.title}>
          {title}
        </Text>
        <Text variant="bodyMedium" style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
      <View style={styles.ssoContainer}>
        <SocialIconButton
          title="Facebook"
          icon="facebook"
          onPress={onFBPress}
        />
        <SocialIconButton
          title="Google"
          icon="google"
          onPress={onGooglePress}
        />
      </View>
      {!hideDivider && <DividerLine />}
    </Fragment>
  );
};

export default AuthHeader;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    headerContainer: {},
    title: {
      color: theme.colors.primary,
      fontWeight: theme.fonts.labelLarge.fontWeight,
      textAlign: "center",
    },
    subTitle: {
      color: theme.colors.outline,
      textAlign: "center",
    },
    ssoContainer: {
      marginTop: spacing.xxl,
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
  });
};

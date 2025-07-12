import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { radius, spacing } from "~/constants/design";
import AuthHeader from "~/src/components/ui/AuthHeader";
import LinkText from "~/src/components/ui/LinkText";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import TextInput from "~/src/components/ui/TextInput";
import { useAuthNavigation } from "~/src/hooks";

const Login = () => {
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useAuthNavigation();

  const handleOnSignUpPress = () => {
    navigation.navigate("sign-up");
  };
  return (
    <ScreenWrapper style={styles.container}>
      <AuthHeader
        title="Sign In"
        subTitle="Log in to manage your bookings and get personalized travel updates."
      />
      <View style={styles.formContainer}>
        <TextInput placeholder="Email/Phone number" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          showPassword={showPassword}
          togglePassword={() => setShowPassword((pre) => !pre)}
        />
        <Text variant="labelLarge" style={styles.forgotPwd}>
          Forgot Password?
        </Text>
      </View>
      <Button mode="contained" style={styles.button}>
        Log in
      </Button>
      <View style={styles.footerNote}>
        <Text variant="bodyMedium">Don't you have an account?</Text>
        <LinkText text="Sign Up" onPress={handleOnSignUpPress} />
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginTop: spacing.md,
      paddingHorizontal: spacing.md,
    },
    formContainer: {
      marginTop: spacing.xxl,
      gap: spacing.md,
    },
    forgotPwd: {
      color: theme.colors.onSurfaceDisabled,
      textAlign: "right",
    },
    button: {
      marginTop: spacing.xl,
      borderRadius: radius.md,
    },
    footerNote: {
      marginTop: spacing.md,
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
  });
};

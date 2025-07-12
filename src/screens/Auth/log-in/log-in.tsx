import { Fragment, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { radius, spacing } from "~/constants/design";
import AuthHeader from "~/src/components/collections/AuthHeader";

import LinkText from "~/src/components/ui/LinkText";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import Snackbar from "~/src/components/ui/Snackbar";
import TextInput from "~/src/components/ui/TextInput";
import { useAuthNavigation } from "~/src/hooks";
import { useLoginForm } from "~/src/hooks/auth/useLogInForm";
import { useAuth } from "~/src/store";
import { validateLoginForm } from "~/src/utils";

const Login = () => {
  const styles = useStyles();
  const navigation = useAuthNavigation();
  const { state, dispatch } = useLoginForm();
  const [showSnackbar, setShowSnackBar] = useState(false);
  const { login } = useAuth();

  const handleOnLoginPress = async () => {
    const errors = validateLoginForm({
      emailOrPhone: state.emailOrPhone,
      password: state.password,
    });

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      dispatch({
        type: "SET_MESSAGE",
        payload: "Enter email/password to login.",
      });
      setShowSnackBar(true);
      return;
    }

    dispatch({ type: "RESET_ERRORS" });
    const response = await login({
      emailOrPhone: state.emailOrPhone,
      password: state.password,
    });
    if (typeof response === "string") {
      dispatch({
        type: "SET_MESSAGE",
        payload: "Valid credentials are required to proceed.",
      });
      setShowSnackBar(true);
    }
  };

  const handleOnSignUpPress = () => {
    navigation.navigate("sign-up");
  };

  return (
    <Fragment>
      <ScreenWrapper style={styles.container}>
        <AuthHeader
          title="Sign In"
          subTitle="Log in to manage your bookings and get personalized travel updates."
        />
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email/Phone number"
            value={state.emailOrPhone}
            onChangeText={(text) =>
              dispatch({ type: "SET_EMAIL_OR_PHONE", payload: text })
            }
            error={!!state.errors?.emailOrPhone}
            errorMessage={state.errors?.emailOrPhone}
            isEmail
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            showPassword={state.showPassword}
            togglePassword={() =>
              dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" })
            }
            value={state.password}
            onChangeText={(text) =>
              dispatch({ type: "SET_PASSWORD", payload: text })
            }
            error={!!state.errors.password}
            errorMessage={state.errors.password}
          />
          <Text variant="labelLarge" style={styles.forgotPwd}>
            Forgot Password?
          </Text>
        </View>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleOnLoginPress}
          loading={state.loading}
          disabled={state.loading}
        >
          Log in
        </Button>
        <View style={styles.footerNote}>
          <Text variant="bodyMedium">Don't you have an account?</Text>
          <LinkText text="Sign Up" onPress={handleOnSignUpPress} />
        </View>
      </ScreenWrapper>
      {showSnackbar && (
        <Snackbar visible={showSnackbar} message={state.alertMessage} />
      )}
    </Fragment>
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

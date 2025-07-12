import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { radius, spacing } from "~/constants/design";
import AuthHeader from "~/src/components/collections/AuthHeader";

import LinkText from "~/src/components/ui/LinkText";
import PrivacyCheckbox from "~/src/components/ui/PrivacyCheckbox";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import TextInput from "~/src/components/ui/TextInput";
import { useAuthNavigation, useSignUpForm } from "~/src/hooks";
import { validateSignUpForm } from "~/src/utils";

const SignUp = () => {
  const navigation = useAuthNavigation();
  const { state, dispatch } = useSignUpForm();
  const styles = useStyles();

  const handleOnSignInPress = () => {
    navigation.navigate("log-in");
  };

  const handleOnCreateAccountPress = () => {
    const errors = validateSignUpForm({
      name: state.name,
      emailOrPhone: state.emailOrPhone,
      password: state.password,
      termsAccepted: state.termsAccepted,
    });
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }

    dispatch({ type: "RESET_ERRORS" });

    // Proceed with API call or navigation
    console.log("Form Submitted:", state);
  };

  return (
    <ScreenWrapper style={styles.container}>
      <AuthHeader
        title="Sign Up"
        subTitle="Start your journey with us. Book flights, manage trips, and explore
          the skies."
      />
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          value={state.name}
          onChangeText={(text) => dispatch({ type: "SET_NAME", payload: text })}
          error={!!state.errors?.name}
          errorMessage={state.errors?.name}
        />
        <TextInput
          placeholder="Email/Phone number"
          value={state.emailOrPhone}
          onChangeText={(text) =>
            dispatch({ type: "SET_EMAIL_OR_PHONE", payload: text })
          }
          error={!!state.errors?.emailOrPhone}
          errorMessage={state.errors?.emailOrPhone}
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
          error={!!state.errors?.password}
          errorMessage={state.errors?.password}
        />
      </View>

      <PrivacyCheckbox
        status={state.termsAccepted}
        onPress={() => dispatch({ type: "TOGGLE_TERMS" })}
        error={!!state.errors?.termsAccepted}
        errorMessage={state.errors?.termsAccepted}
      />

      <Button
        mode="contained"
        style={styles.button}
        onPress={handleOnCreateAccountPress}
      >
        Create Account
      </Button>
      <View style={styles.footerNote}>
        <Text variant="bodyMedium">Do you have an account?</Text>
        <LinkText text="Sign In" onPress={handleOnSignInPress} />
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

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
    button: {
      marginTop: spacing.xxl,
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

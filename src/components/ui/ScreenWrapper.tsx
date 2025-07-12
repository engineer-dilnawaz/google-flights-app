import { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenWrapperProps = PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
};

const ScreenWrapper = ({ children, style }: ScreenWrapperProps) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.flexGrow}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.container, style]}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar animated barStyle="default" showHideTransition={"slide"} />
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    flex: {
      flex: 1,
    },
    flexGrow: {
      flexGrow: 1,
    },
  });
};

import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenWrapperProps = PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
};

const ScreenWrapper = ({ children, style }: ScreenWrapperProps) => {
  const styles = useStyles();

  return <View style={[styles.container, style]}>{children}</View>;
};

const useStyles = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      backgroundColor: theme.colors.background,
    },
  });
};

export default ScreenWrapper;

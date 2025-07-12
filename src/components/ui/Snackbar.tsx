import { StyleSheet } from "react-native";
import { Snackbar as SnackbarPaper, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SnackbarProps = {
  visible: boolean;
  message: string;
  action?: {
    label: string;
    onPress: () => void;
  };
  duration?: number;
  onDismissSnackBar: () => void;
};

const Snackbar = ({
  visible,
  message,
  action,
  duration = 5000,
  onDismissSnackBar,
}: SnackbarProps) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <SnackbarPaper
      duration={duration}
      visible={visible}
      onDismiss={onDismissSnackBar}
      elevation={4}
      action={action}
      wrapperStyle={styles.wrapperStyle}
      contentStyle={styles.contentStyle}
      style={styles.snackbar}
    >
      {message}
    </SnackbarPaper>
  );
};

const useStyles = () => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  return StyleSheet.create({
    wrapperStyle: {
      //   top,
    },
    contentStyle: {},
    snackbar: {},
  });
};

export default Snackbar;

import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "~/src/hooks/useAppTheme";

const SignUp = () => {
  const styles = useStyles();
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;

const useStyles = () => {
  const theme = useAppTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      //   backgroundColor: theme.colors
    },
  });
};

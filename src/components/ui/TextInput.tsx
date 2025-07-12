import { StyleSheet } from "react-native";
import { TextInput as PaperInput, useTheme } from "react-native-paper";
import { radius } from "~/constants/design";
import Icon from "./Icon";

type TextInputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  showPassword?: boolean;
  togglePassword?: () => void;
};

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showPassword = false,
  togglePassword,
}: TextInputProps) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <PaperInput
      mode="outlined"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.textInput}
      outlineStyle={styles.outline}
      activeOutlineColor={theme.colors.primary}
      placeholderTextColor={theme.colors.onSurfaceDisabled}
      secureTextEntry={secureTextEntry && !showPassword}
      right={
        secureTextEntry ? (
          <PaperInput.Icon
            onPress={togglePassword}
            icon={(props) => (
              <Icon
                type="Feather"
                name={showPassword ? "eye-off" : "eye"}
                color={props.color}
                size={props.size}
              />
            )}
          />
        ) : null
      }
    />
  );
};

export default TextInput;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    textInput: {
      backgroundColor: theme.colors.elevation.level3,
    },
    outline: {
      borderRadius: radius.md,
    },
  });
};

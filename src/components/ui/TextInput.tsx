import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { TextInput as PaperTextInput } from "react-native-paper";
import { useAppTheme } from "~/hooks/useAppTheme";

export type InputStatus = "normal" | "success" | "error" | "warning";
export type InputUIState =
  | "default"
  | "focused"
  | "typing"
  | "filled"
  | "disabled";

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  placeholder?: string;
  status?: InputStatus;
  state?: InputUIState;
  iconLeft?:
    | string
    | ((props: { color: string; size: number }) => React.ReactNode);
  iconRight?:
    | string
    | ((props: { color: string; size: number }) => React.ReactNode);
  style?: ViewStyle;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  // ...other PaperTextInput props
}

export const TextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  label = "Input text",
  placeholder,
  status = "normal",
  state = "default",
  iconLeft,
  iconRight,
  style,
  disabled = false,
  onFocus,
  onBlur,
  ...rest
}) => {
  const theme = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  // Determine border and icon color based on status
  const getColor = () => {
    switch (status) {
      case "success":
        return (
          theme.colors.success || theme.colors.custom.success[600] || "#12B76A"
        );
      case "error":
        return (
          theme.colors.error || theme.colors.custom.error[600] || "#F04438"
        );
      case "warning":
        return (
          theme.colors.warning || theme.colors.custom.warning[600] || "#F79009"
        );
      case "normal":
      default:
        return theme.colors.primary;
    }
  };

  // Determine Paper mode
  const mode: "outlined" = "outlined";

  // Determine if input is filled
  const isFilled = value && value.length > 0;

  // Determine effective state
  const effectiveState = disabled
    ? "disabled"
    : isFocused
    ? "focused"
    : isFilled
    ? "filled"
    : state;

  // Border color logic
  let borderColor = theme.colors.outline;
  if (effectiveState === "disabled") {
    borderColor = theme.colors.surfaceVariant || "#E4E7EC";
  } else if (status !== "normal") {
    borderColor = getColor();
  } else if (effectiveState === "focused" || effectiveState === "typing") {
    borderColor = theme.colors.primary;
  }

  // Icon color logic
  let iconColor = borderColor;
  if (effectiveState === "disabled") {
    iconColor = theme.colors.outlineVariant || "#D0D5DD";
  }

  // Right status indicator (dot)
  const renderStatusIndicator = ({
    color,
    size,
  }: {
    color: string;
    size: number;
  }) => {
    if (status === "normal" || effectiveState === "disabled") return null;
    return (
      <View
        style={{
          width: size * 0.6,
          height: size * 0.6,
          borderRadius: size * 0.3,
          backgroundColor: getColor(),
          marginLeft: 8,
        }}
      />
    );
  };

  // Compose left adornment
  let leftAdornment;
  if (iconLeft) {
    if (typeof iconLeft === "string") {
      leftAdornment = { icon: iconLeft };
    } else {
      leftAdornment = { icon: iconLeft };
    }
  }

  // Compose right adornment
  let rightAdornment;
  if (iconRight) {
    if (typeof iconRight === "string") {
      rightAdornment = { icon: iconRight };
    } else {
      rightAdornment = { icon: iconRight };
    }
  } else if (status !== "normal" && effectiveState !== "disabled") {
    rightAdornment = { icon: renderStatusIndicator };
  }

  return (
    <PaperTextInput
      value={value}
      onChangeText={onChangeText}
      label={label}
      placeholder={placeholder}
      mode={mode}
      style={[
        {
          backgroundColor: disabled
            ? theme.colors.surfaceVariant
            : theme.colors.background,
          borderColor,
        },
        style,
      ]}
      outlineColor={borderColor}
      activeOutlineColor={borderColor}
      disabled={disabled || effectiveState === "disabled"}
      left={leftAdornment as any}
      right={rightAdornment as any}
      theme={{
        colors: {
          ...theme.colors,
          primary: borderColor,
          text: theme.colors.onSurface,
          placeholder: theme.colors.outline,
        },
      }}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus && onFocus();
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur && onBlur();
      }}
      {...rest}
    />
  );
};

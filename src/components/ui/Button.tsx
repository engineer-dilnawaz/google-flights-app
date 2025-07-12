import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { useAppTheme } from "~/hooks/useAppTheme";

export type ButtonVariant =
  | "default"
  | "rounded"
  | "outline"
  | "roundedOutline";
export type ButtonSize = "big" | "medium" | "small";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "default",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  style,
  textStyle,
  fullWidth = false,
}) => {
  const theme = useAppTheme();

  const getButtonMode = ():
    | "text"
    | "outlined"
    | "contained"
    | "elevated"
    | "contained-tonal" => {
    switch (variant) {
      case "outline":
      case "roundedOutline":
        return "outlined";
      case "default":
      case "rounded":
      default:
        return "contained";
    }
  };

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      opacity: disabled ? 0.6 : 1,
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, ViewStyle> = {
      big: {
        minHeight: 56,
      },
      medium: {
        minHeight: 48,
      },
      small: {
        minHeight: 36,
      },
    };

    // Variant styles
    const variantStyles: Record<ButtonVariant, ViewStyle> = {
      default: {
        borderRadius: 4,
      },
      rounded: {
        borderRadius: 24,
      },
      outline: {
        borderRadius: 4,
      },
      roundedOutline: {
        borderRadius: 24,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      width: fullWidth ? "100%" : undefined,
      ...style,
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseTextStyle: TextStyle = {
      fontWeight: "600",
    };

    // Size text styles
    const sizeTextStyles: Record<ButtonSize, TextStyle> = {
      big: {
        fontSize: 18,
      },
      medium: {
        fontSize: 16,
      },
      small: {
        fontSize: 14,
      },
    };

    return {
      ...baseTextStyle,
      ...sizeTextStyles[size],
      ...textStyle,
    };
  };

  const getContentStyle = (): ViewStyle => {
    const iconSpacing = size === "big" ? 12 : size === "medium" ? 8 : 6;

    return {
      flexDirection: iconPosition === "right" ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "center",
      gap: iconSpacing,
    };
  };

  const handlePress = () => {
    if (!disabled && !loading) {
      onPress();
    }
  };

  return (
    <PaperButton
      mode={getButtonMode()}
      onPress={handlePress}
      disabled={disabled || loading}
      loading={loading}
      icon={icon && !loading ? () => icon : undefined}
      style={getButtonStyle()}
      contentStyle={getContentStyle()}
      labelStyle={getTextStyle()}
      buttonColor={
        variant === "default" || variant === "rounded"
          ? theme.colors.primary
          : undefined
      }
      textColor={
        variant === "outline" || variant === "roundedOutline"
          ? theme.colors.primary
          : theme.colors.onPrimary
      }
    >
      {title}
    </PaperButton>
  );
};

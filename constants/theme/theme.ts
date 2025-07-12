import "react-native-paper";

declare module "react-native-paper" {
  interface ThemeColors {
    custom: typeof AppColors;
    accent: {
      blue: string;
      purple: string;
      pink: string;
      mint: string;
    };
  }
}

import {
  configureFonts,
  DefaultTheme,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";
import { fontConfig } from "../FontsConfig";
import { AppColors, darkColors, lightColors } from "./colors";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // React Native Paper semantic colors
    primary: lightColors.primary,
    onPrimary: lightColors.onPrimary,
    primaryContainer: lightColors.primaryContainer,
    onPrimaryContainer: lightColors.onPrimaryContainer,

    secondary: lightColors.secondary,
    onSecondary: lightColors.onSecondary,
    secondaryContainer: lightColors.secondaryContainer,
    onSecondaryContainer: lightColors.onSecondaryContainer,

    background: lightColors.background,
    onBackground: lightColors.onBackground,
    surface: lightColors.surface,
    onSurface: lightColors.onSurface,
    surfaceVariant: lightColors.surfaceVariant,
    onSurfaceVariant: lightColors.onSurfaceVariant,
    surfaceContainer: lightColors.surfaceContainer,
    onSurfaceContainer: lightColors.onSurfaceContainer,
    surfaceContainerHigh: lightColors.surfaceContainerHigh,
    surfaceContainerHighest: lightColors.surfaceContainerHighest,

    error: lightColors.error,
    onError: lightColors.onError,
    errorContainer: lightColors.errorContainer,
    onErrorContainer: lightColors.onErrorContainer,

    outline: lightColors.outline,
    outlineVariant: lightColors.outlineVariant,

    // Custom colors
    custom: lightColors.custom,
    accent: lightColors.accent,
  },
  fonts: configureFonts({ config: { ...DefaultTheme.fonts, ...fontConfig } }),
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // React Native Paper semantic colors
    primary: darkColors.primary,
    onPrimary: darkColors.onPrimary,
    primaryContainer: darkColors.primaryContainer,
    onPrimaryContainer: darkColors.onPrimaryContainer,

    secondary: darkColors.secondary,
    onSecondary: darkColors.onSecondary,
    secondaryContainer: darkColors.secondaryContainer,
    onSecondaryContainer: darkColors.onSecondaryContainer,

    background: darkColors.background,
    onBackground: darkColors.onBackground,
    surface: darkColors.surface,
    onSurface: darkColors.onSurface,
    surfaceVariant: darkColors.surfaceVariant,
    onSurfaceVariant: darkColors.onSurfaceVariant,
    surfaceContainer: darkColors.surfaceContainer,
    onSurfaceContainer: darkColors.onSurfaceContainer,
    surfaceContainerHigh: darkColors.surfaceContainerHigh,
    surfaceContainerHighest: darkColors.surfaceContainerHighest,

    error: darkColors.error,
    onError: darkColors.onError,
    errorContainer: darkColors.errorContainer,
    onErrorContainer: darkColors.onErrorContainer,

    outline: darkColors.outline,
    outlineVariant: darkColors.outlineVariant,

    // Custom colors
    custom: darkColors.custom,
    accent: darkColors.accent,
  },
  fonts: configureFonts({ config: { ...DefaultTheme.fonts, ...fontConfig } }),
};

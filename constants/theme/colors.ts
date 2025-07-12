// Base color palette
const baseColors = {
  gray: {
    100: "#FFFFFF",
    200: "#F9FAFB",
    300: "#F2F4F7",
    400: "#E4E7EC",
    500: "#D0D5DD",
    600: "#98A2B3",
    700: "#667085",
    800: "#475467",
    900: "#344054",
    950: "#1D2939",
    1000: "#101828",
  },
  primary: {
    100: "#f2f9ff",
    200: "#e6f3ff",
    300: "#bfe1ff",
    400: "#99ceff",
    500: "#4daaff",
    600: "#0085ff",
    700: "#0078e6",
    800: "#0064bf",
    900: "#005099",
    950: "#00417d",
  },
  error: {
    100: "#FEF3F2",
    200: "#FEE4E2",
    300: "#FECDCA",
    400: "#FDA29B",
    500: "#F97066",
    600: "#F04438",
    700: "#D92D20",
    800: "#B42318",
    900: "#912018",
    950: "#7A271A",
  },
  warning: {
    100: "#FFFAEB",
    200: "#FEF0C7",
    300: "#FEDF89",
    400: "#FEC84B",
    500: "#FDB022",
    600: "#F79009",
    700: "#DC6803",
    800: "#B54708",
    900: "#93370D",
    950: "#7A2E0E",
  },
  success: {
    100: "#ECFDF3",
    200: "#D1FADF",
    300: "#A6F4C5",
    400: "#6CE9A6",
    500: "#32D583",
    600: "#12B76A",
    700: "#039855",
    800: "#027A48",
    900: "#05603A",
    950: "#054F31",
  },
  purple: {
    100: "#f8f7ff",
    200: "#f2effe",
    300: "#ded6fd",
    400: "#cabdfc",
    500: "#a28cfa",
    600: "#7A5AF8",
    700: "#6e51df",
    800: "#5c44ba",
    900: "#493695",
    950: "#3c2c7a",
  },
  pink: {
    100: "#fff8fc",
    200: "#fff2f9",
    300: "#ffdef0",
    400: "#fecbe7",
    500: "#fea3d4",
    600: "#fd7cc2",
    700: "#e470af",
    800: "#be5d92",
    900: "#984a74",
    950: "#7c3d5f",
  },
  mint: {
    100: "#f5fefb",
    200: "#ebfcf7",
    300: "#cdf8eb",
    400: "#aef3df",
    500: "#72eac6",
    600: "#35E1AE",
    700: "#30cb9d",
    800: "#28a983",
    900: "#208768",
    950: "#1a6e55",
  },
  blueLight: {
    100: "#F0F9FF",
    200: "#E0F2FE",
    300: "#B9E6FE",
    400: "#7CD4FD",
    500: "#36BFFA",
    600: "#0BA5EC",
    700: "#0086C9",
    800: "#026AA2",
    900: "#065986",
    950: "#0B4A6F",
  },
};

// Light mode colors
export const lightColors = {
  // Semantic colors for light mode
  background: baseColors.gray[100],
  surface: baseColors.gray[100],
  surfaceVariant: baseColors.gray[200],
  surfaceContainer: baseColors.gray[200],
  surfaceContainerHigh: baseColors.gray[300],
  surfaceContainerHighest: baseColors.gray[400],

  // Text colors
  onBackground: baseColors.gray[1000],
  onSurface: baseColors.gray[950],
  onSurfaceVariant: baseColors.gray[700],
  onSurfaceContainer: baseColors.gray[900],

  // Primary colors
  primary: baseColors.primary[600],
  onPrimary: baseColors.gray[100],
  primaryContainer: baseColors.primary[100],
  onPrimaryContainer: baseColors.primary[900],

  // Secondary colors
  secondary: baseColors.purple[600],
  onSecondary: baseColors.gray[100],
  secondaryContainer: baseColors.purple[100],
  onSecondaryContainer: baseColors.purple[900],

  // Error colors
  error: baseColors.error[600],
  onError: baseColors.gray[100],
  errorContainer: baseColors.error[100],
  onErrorContainer: baseColors.error[900],

  // Success colors
  success: baseColors.success[600],
  onSuccess: baseColors.gray[100],
  successContainer: baseColors.success[100],
  onSuccessContainer: baseColors.success[900],

  // Warning colors
  warning: baseColors.warning[600],
  onWarning: baseColors.gray[100],
  warningContainer: baseColors.warning[100],
  onWarningContainer: baseColors.warning[900],

  // Outline and borders
  outline: baseColors.gray[600],
  outlineVariant: baseColors.gray[400],

  // Custom accent colors
  accent: {
    blue: baseColors.blueLight[600],
    purple: baseColors.purple[600],
    pink: baseColors.pink[600],
    mint: baseColors.mint[600],
  },

  // Custom color palette
  custom: baseColors,
};

// Dark mode colors
export const darkColors = {
  // Semantic colors for dark mode
  background: baseColors.gray[1000],
  surface: baseColors.gray[950],
  surfaceVariant: baseColors.gray[900],
  surfaceContainer: baseColors.gray[900],
  surfaceContainerHigh: baseColors.gray[800],
  surfaceContainerHighest: baseColors.gray[700],

  // Text colors
  onBackground: baseColors.gray[100],
  onSurface: baseColors.gray[200],
  onSurfaceVariant: baseColors.gray[400],
  onSurfaceContainer: baseColors.gray[100],

  // Primary colors
  primary: baseColors.primary[300],
  onPrimary: baseColors.gray[1000],
  primaryContainer: baseColors.primary[900],
  onPrimaryContainer: baseColors.primary[100],

  // Secondary colors
  secondary: baseColors.purple[300],
  onSecondary: baseColors.gray[1000],
  secondaryContainer: baseColors.purple[900],
  onSecondaryContainer: baseColors.purple[100],

  // Error colors
  error: baseColors.error[400],
  onError: baseColors.gray[1000],
  errorContainer: baseColors.error[900],
  onErrorContainer: baseColors.error[100],

  // Success colors
  success: baseColors.success[400],
  onSuccess: baseColors.gray[1000],
  successContainer: baseColors.success[900],
  onSuccessContainer: baseColors.success[100],

  // Warning colors
  warning: baseColors.warning[400],
  onWarning: baseColors.gray[1000],
  warningContainer: baseColors.warning[900],
  onWarningContainer: baseColors.warning[100],

  // Outline and borders
  outline: baseColors.gray[600],
  outlineVariant: baseColors.gray[700],

  // Custom accent colors (adjusted for dark mode)
  accent: {
    blue: baseColors.blueLight[400],
    purple: baseColors.purple[400],
    pink: baseColors.pink[400],
    mint: baseColors.mint[400],
  },

  // Custom color palette
  custom: baseColors,
};

// Export the base colors for backward compatibility
export const AppColors = baseColors;

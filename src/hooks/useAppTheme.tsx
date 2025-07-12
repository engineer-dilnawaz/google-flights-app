import { useTheme } from "react-native-paper";
import type { CustomTheme } from "~/types/theme";

export const useAppTheme = () => {
  return useTheme<CustomTheme>();
};

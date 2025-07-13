import { RouteProp, useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "~/src/navigation/main-stack/main-stack";

type MainRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

/**
 * Usage:
 * const route = useAuthRoute<'log-in'>()
 */
export function useMainRoute<T extends keyof RootStackParamList>() {
  return useRoute<MainRouteProp<T>>();
}

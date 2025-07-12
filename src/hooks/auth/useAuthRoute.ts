import { RouteProp, useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "~/src/navigation/auth-stack/auth-stack";

type AuthRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

/**
 * Usage:
 * const route = useAuthRoute<'log-in'>()
 */
export function useAuthRoute<T extends keyof RootStackParamList>() {
  return useRoute<AuthRouteProp<T>>();
}

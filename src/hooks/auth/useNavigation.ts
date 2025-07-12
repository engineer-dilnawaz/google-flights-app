import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "~/src/navigation/auth-stack/auth-stack";

type AuthStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useAuthNavigation = () => useNavigation<AuthStackNavigationProp>();

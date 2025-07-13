import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "~/src/navigation/main-stack/main-stack";

type MainStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useMainNavigation = () => useNavigation<MainStackNavigationProp>();

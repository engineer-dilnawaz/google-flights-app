import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultsScreen from "~/src/screens/Main/ResultsScreen";
import BottomTab from "../bottom-tab/bottom-tab";

export type RootStackParamList = {
  home: undefined;
  result: {
    searchParams: {
      from: string;
      to: string;
      departureDate: string;
    };
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={BottomTab} />
      <Stack.Screen name="result" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;

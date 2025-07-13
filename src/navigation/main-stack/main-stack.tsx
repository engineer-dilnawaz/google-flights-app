import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "~/src/screens/Main/FormScreen";
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
  form: {
    title: string;
    type: "FROM" | "TO" | "TRAVELLERS";
    selected?: string;
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
      <Stack.Screen
        name="form"
        component={FormScreen}
        options={{ animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

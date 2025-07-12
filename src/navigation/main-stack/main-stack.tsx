import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "~/src/screens/Main/HomeScreen";
import ResultsScreen from "~/src/screens/Main/ResultsScreen";

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

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="result" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

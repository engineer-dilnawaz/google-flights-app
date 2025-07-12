import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "~/src/screens/Auth/log-in/log-in";
import SignUp from "~/src/screens/Auth/sign-up/sign-up";

export type RootStackParamList = {
  "sign-up": undefined;
  "log-in": undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="sign-up" component={SignUp} />
        <Stack.Screen name="log-in" component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;

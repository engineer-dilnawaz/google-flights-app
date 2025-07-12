import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./auth-stack/auth-stack";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigator;

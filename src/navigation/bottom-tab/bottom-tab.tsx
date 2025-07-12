import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Fragment, useState } from "react";
import { BottomNavigation, useTheme } from "react-native-paper";
import FavourtieScreen from "~/src/screens/Main/FavouriteScreen";

import HomeScreen from "~/src/screens/Main/HomeScreen";
import ProfileScreen from "~/src/screens/Main/ProfileScreen";

type Route = {
  key: string;
  title: string;
  icon: string;
};

export default function BottomTab() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();

  const routes: Route[] = [
    { key: "home", title: "Home", icon: "home" },
    { key: "favourite", title: "Saved", icon: "heart" },
    { key: "profile", title: "Settings", icon: "cog" },
  ];

  const renderScene = ({ route }: { route: Route }) => {
    switch (route.key) {
      case "home":
        return <HomeScreen />;
      case "favourite":
        return <FavourtieScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      {renderScene({ route: routes[index] })}
      <BottomNavigation.Bar
        navigationState={{ index, routes }}
        onTabPress={({ route }) => {
          const newIndex = routes.findIndex((r) => r.key === route.key);
          if (newIndex !== -1) {
            setIndex(newIndex);
          }
        }}
        renderIcon={({ route, color, focused }) => {
          return (
            <Icon
              name={route.icon as unknown as any}
              size={24}
              color={focused ? theme.colors.primary : color}
            />
          );
        }}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.onSurfaceVariant}
        getLabelText={({ route }) => route.title}
        shifting
      />
    </Fragment>
  );
}

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Fragment, useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FavourtieScreen from "~/src/screens/Main/FavouriteScreen";

import HomeScreen from "~/src/screens/Main/HomeScreen";
import ProfileScreen from "~/src/screens/Main/ProfileScreen";
import { HPX } from "~/src/utils";

type Route = {
  key: string;
  title: string;
  icon: string;
};

const routes: Route[] = [
  { key: "home", title: "Home", icon: "home" },
  { key: "favourite", title: "Saved", icon: "heart" },
  { key: "profile", title: "Settings", icon: "cog" },
];

export default function BottomTab() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const styles = useStyles();

  const renderScene = useCallback(({ route }: { route: Route }) => {
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
  }, []);

  return (
    <Fragment>
      {renderScene({ route: routes[index] })}
      <BottomNavigation.Bar
        shifting
        keyboardHidesNavigationBar
        style={styles.tabContainer}
        activeIndicatorStyle={styles.activeIndicatorStyle}
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
              size={focused ? HPX(26) : HPX(24)}
              color={focused ? theme.colors.primary : color}
            />
          );
        }}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.onSurfaceVariant}
        getLabelText={({ route }) => route.title}
      />
    </Fragment>
  );
}

const useStyles = () => {
  const theme = useTheme();
  const safeInsets = useSafeAreaInsets();
  return StyleSheet.create({
    tabContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    activeIndicatorStyle: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

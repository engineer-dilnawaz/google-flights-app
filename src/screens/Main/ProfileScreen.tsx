import { Fragment, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, List, Menu, Switch, Text, useTheme } from "react-native-paper";
import { spacing } from "~/constants/design";
import DeleteAccountBanner from "~/src/components/ui/DeleteAccountBanner";
import ScreenWrapper from "~/src/components/ui/ScreenWrapper";
import { useThemeContext } from "~/src/store";
import { useAuth } from "~/src/store/AuthContext";
import { HPX } from "~/src/utils";

const languages = ["English", "Urdu", "Spanish", "French"];

const ProfileScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { isDark, toggleTheme } = useThemeContext();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [deleteAlert, setDeleteAlert] = useState(false);
  const { user, logout } = useAuth();

  const handleSelectLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setMenuVisible(false);
    // TODO: apply language logic via i18n or localization library
  };

  const handleDeleteAccount = () => {
    setDeleteAlert(true);
  };

  return (
    <Fragment>
      <ScreenWrapper style={styles.container}>
        <View style={styles.profileSection}>
          <Avatar.Text
            size={HPX(60)}
            label={user?.name?.charAt(0) || "U"}
            labelStyle={{ fontSize: 24 }}
            style={styles.avatar}
          />
          <View style={styles.userInfoContainer}>
            <Text variant="titleMedium" style={styles.userName}>
              {user?.name || "User Name"}
            </Text>
            <Text variant="bodySmall" style={styles.email}>
              {user?.emailOrPhone || "email/phone"}
            </Text>
          </View>
        </View>

        <List.Section style={styles.settingsContainer}>
          <List.Subheader style={styles.sectionHeading}>
            Account Settings
          </List.Subheader>

          <List.Item
            title="Dark Mode"
            left={() => <List.Icon icon="theme-light-dark" />}
            onPress={toggleTheme}
            right={() => <Switch value={isDark} onValueChange={toggleTheme} />}
          />

          <List.Item
            title="Notifications"
            description="Manage push alerts"
            left={() => <List.Icon icon="bell-outline" />}
            onPress={() => {}}
          />

          <List.Item
            title="Privacy Policy"
            left={() => <List.Icon icon="shield-lock-outline" />}
            onPress={() => {}}
          />

          <Menu
            elevation={5}
            mode="flat"
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <List.Item
                title="Language"
                description={selectedLanguage}
                left={() => <List.Icon icon="translate" />}
                onPress={() => setMenuVisible(true)}
              />
            }
          >
            {languages.map((lang) => (
              <Menu.Item
                key={lang}
                onPress={() => handleSelectLanguage(lang)}
                title={lang}
              />
            ))}
          </Menu>

          <List.Item
            title="Help & Support"
            left={() => <List.Icon icon="help-circle-outline" />}
            onPress={() => {}}
          />

          <List.Item
            title="Log Out"
            titleStyle={{ color: theme.colors.error }}
            left={() => <List.Icon color={theme.colors.error} icon="logout" />}
            onPress={logout}
          />
        </List.Section>

        <List.Section>
          <List.Item
            title="Delete Account"
            titleStyle={{ color: theme.colors.error }}
            left={() => (
              <List.Icon color={theme.colors.error} icon="delete-outline" />
            )}
            onPress={handleDeleteAccount}
          />
        </List.Section>
      </ScreenWrapper>
      {deleteAlert && (
        <DeleteAccountBanner
          visible={deleteAlert}
          setVisible={setDeleteAlert}
        />
      )}
    </Fragment>
  );
};

export default ProfileScreen;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: spacing.md,
    },
    profileSection: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.xxl,
      gap: spacing.md,
    },
    avatar: {
      backgroundColor: theme.colors.onPrimary,
      borderWidth: 2,
      borderColor: theme.colors.inversePrimary,
      justifyContent: "center",
      alignItems: "center",
    },
    userInfoContainer: {},
    userName: {
      color: theme.colors.primary,
    },
    email: {
      color: theme.colors.onSurfaceVariant,
    },
    sectionHeading: {
      ...theme.fonts.labelLarge,
      color: theme.colors.onPrimaryContainer,
    },
    settingsContainer: {
      flex: 1,
    },
  });
};

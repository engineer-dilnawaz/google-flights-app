import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import { spacing } from "~/constants/design";
import { HPX } from "~/src/utils";
import Icon from "./Icon";

type IconTextProps = {
  label: string;
  icon: "human-male" | "human-child" | "human-female-girl" | "chevron-down";
};

const IconText = ({ label, icon }: IconTextProps) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">{label}</Text>
      <Icon
        type="MaterialCommunityIcons"
        name={icon}
        size={HPX(20)}
        color={theme.colors.onBackground}
      />
    </View>
  );
};

export default IconText;

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.xs,
    },
  });
};

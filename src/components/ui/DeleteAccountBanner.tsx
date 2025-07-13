import { Dispatch } from "react";
import { Banner, useTheme } from "react-native-paper";
import { useAuth } from "~/src/store";
import Icon from "./Icon";

type DeleteAccountBannerProps = {
  visible: boolean;
  setVisible: Dispatch<React.SetStateAction<boolean>>;
};

const DeleteAccountBanner = ({
  visible,
  setVisible,
}: DeleteAccountBannerProps) => {
  const theme = useTheme();
  const { deleteAccount } = useAuth();

  const handleDelete = async () => {
    await deleteAccount();
  };

  return (
    <Banner
      elevation={5}
      visible={visible}
      actions={[
        {
          label: "Cancel",
          onPress: () => setVisible(false),
          labelStyle: { color: theme.colors.primary },
        },
        {
          label: "Yes Delete!",
          onPress: handleDelete,
          labelStyle: { color: theme.colors.error },
        },
      ]}
      collapsable
      icon={({ size, color }) => (
        <Icon
          type="MaterialCommunityIcons"
          name={"delete-alert"}
          size={size}
          color={theme.colors.error}
        />
      )}
    >
      Are you sure you want to delete your account? This action is permanent.
    </Banner>
  );
};

export default DeleteAccountBanner;

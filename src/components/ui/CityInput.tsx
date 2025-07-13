import { TextInput, useTheme } from "react-native-paper";

import { HPX } from "~/src/utils";

type CityInputProps = {
  label: "From" | "To";
  value: string;
  onPress: () => void;
  leftIcon: "airplane-landing" | "airplane-takeoff";
};

const CityInput = ({ label, value, onPress, leftIcon }: CityInputProps) => {
  const theme = useTheme();

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      editable={false}
      onPress={onPress}
      left={
        <TextInput.Icon
          icon={leftIcon}
          size={HPX(20)}
          color={theme.colors.onSurfaceDisabled}
        />
      }
    />
  );
};

export default CityInput;

import { format } from "date-fns";
import { TextInput, useTheme } from "react-native-paper";
import { HPX } from "~/src/utils";
import Icon from "./Icon";

type DateInputProps = {
  label: string;
  value: Date | undefined;
  onPress: () => void;
  rightIcon?: "calendar-month";
  dateFormat?: "dd MMMM yyyy" | "dd MMM yy";
};

const DateInput = ({
  label,
  value,
  rightIcon = "calendar-month",
  onPress,
  dateFormat = "dd MMMM yyyy",
}: DateInputProps) => {
  const theme = useTheme();
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value ? format(value, dateFormat) : ""}
      editable={false}
      onPress={onPress}
      right={
        <TextInput.Icon
          icon={() => (
            <Icon
              type="MaterialCommunityIcons"
              name={rightIcon}
              size={HPX(20)}
              color={theme.colors.onSurfaceDisabled}
            />
          )}
          onPress={onPress}
        />
      }
    />
  );
};

export default DateInput;

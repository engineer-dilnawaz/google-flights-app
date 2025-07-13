import { List } from "react-native-paper";
import { PlaceType } from "~/src/types/place";

type SectionListProps = {
  label: "Suggested Places" | "Current Location" | "Recent Searches";
  list: PlaceType[];
  showList?: boolean;
  onPress: (item: PlaceType) => void;
  icon: "history" | "crosshairs-gps" | "airplane";
};

const SectionList = ({
  label,
  list,
  showList = true,
  onPress,
  icon,
}: SectionListProps) => {
  if (!showList) return null;

  return (
    <List.Section>
      <List.Subheader>{label}</List.Subheader>
      {list.map((item) => (
        <List.Item
          key={item.code}
          title={`${item.city} (${item.code})`}
          description={item.airport}
          left={() => <List.Icon icon={icon} />}
          onPress={() => onPress(item)}
        />
      ))}
    </List.Section>
  );
};

export default SectionList;

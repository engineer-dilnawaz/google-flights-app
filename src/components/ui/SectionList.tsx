import { List } from "react-native-paper";
import { PlaceItem } from "~/src/types/place";

type SectionListProps = {
  label: "Suggested Places" | "Current Location" | "Recent Searches";
  list: PlaceItem[];
  showList?: boolean;
  onPress: (item: PlaceItem) => void;
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
          key={item.entityId}
          title={`${item.presentation.title} (${item.skyId})`}
          description={
            item.presentation.subtitle || item.presentation.suggestionTitle
          }
          left={() => <List.Icon icon={icon} />}
          onPress={() => onPress(item)}
        />
      ))}
    </List.Section>
  );
};

export default SectionList;

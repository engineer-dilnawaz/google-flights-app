import { Image as ExpoImage, ImageProps as ExpoImageProps } from "expo-image";
import { ImageStyle, StyleProp } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

type ResizeMode = "cover" | "contain" | "fill" | "none" | "scale-down";

export type CustomImageProps = ExpoImageProps & {
  source: string;
  contentFit?: ResizeMode;
  style?: StyleProp<ImageStyle>;
};

export const Image: React.FC<CustomImageProps> = ({
  source,
  contentFit = "cover",
  style,
}) => {
  return (
    <ExpoImage
      source={source}
      contentFit={contentFit}
      style={style}
      placeholder={blurhash}
      transition={1000}
    />
  );
};

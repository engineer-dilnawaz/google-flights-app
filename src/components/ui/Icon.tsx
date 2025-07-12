import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Zocial from "@expo/vector-icons/Zocial";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

// All supported icon types
export type IconType =
  | "AntDesign"
  | "Entypo"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Fontisto"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Octicons"
  | "SimpleLineIcons"
  | "Zocial";

// Icon name types for each icon set
type AntDesignIconName = keyof typeof AntDesign.glyphMap;
type EntypoIconName = keyof typeof Entypo.glyphMap;
type FeatherIconName = keyof typeof Feather.glyphMap;
type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;
type FontAwesome5IconName = keyof typeof FontAwesome5.glyphMap;
type FontistoIconName = keyof typeof Fontisto.glyphMap;
type FoundationIconName = keyof typeof Foundation.glyphMap;
type IoniconsIconName = keyof typeof Ionicons.glyphMap;
type MaterialCommunityIconsIconName =
  keyof typeof MaterialCommunityIcons.glyphMap;
type MaterialIconsIconName = keyof typeof MaterialIcons.glyphMap;
type OcticonsIconName = keyof typeof Octicons.glyphMap;
type SimpleLineIconsIconName = keyof typeof SimpleLineIcons.glyphMap;
type ZocialIconName = keyof typeof Zocial.glyphMap;

// Conditional type for icon names based on icon type
type IconName<T extends IconType> = T extends "AntDesign"
  ? AntDesignIconName
  : T extends "Entypo"
  ? EntypoIconName
  : T extends "Feather"
  ? FeatherIconName
  : T extends "FontAwesome"
  ? FontAwesomeIconName
  : T extends "FontAwesome5"
  ? FontAwesome5IconName
  : T extends "Fontisto"
  ? FontistoIconName
  : T extends "Foundation"
  ? FoundationIconName
  : T extends "Ionicons"
  ? IoniconsIconName
  : T extends "MaterialCommunityIcons"
  ? MaterialCommunityIconsIconName
  : T extends "MaterialIcons"
  ? MaterialIconsIconName
  : T extends "Octicons"
  ? OcticonsIconName
  : T extends "SimpleLineIcons"
  ? SimpleLineIconsIconName
  : T extends "Zocial"
  ? ZocialIconName
  : string;

export interface IconProps<T extends IconType = IconType> {
  type: T;
  name: IconName<T>;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  [key: string]: any; // Allow additional props
}

const iconMap = {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

const Icon = <T extends IconType>({
  type,
  name,
  size = 24,
  color = "black",
  style,
  ...rest
}: IconProps<T>) => {
  const IconComponent = iconMap[type];
  if (!IconComponent) return null;
  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={style}
      {...rest}
    />
  );
};

export default Icon;

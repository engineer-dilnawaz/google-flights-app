// components/LottieAnimation.tsx
import LottieView, { AnimationObject } from "lottie-react-native";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type SourceType =
  | string
  | AnimationObject
  | {
      uri: string;
    };

interface LottieAnimationProps {
  source: SourceType;
  autoPlay?: boolean;
  loop?: boolean;
  style?: ViewStyle;
  resizeMode?: "cover" | "contain" | "center";
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  source,
  autoPlay = true,
  loop = true,
  style,
  resizeMode = "contain",
}) => {
  return (
    <View style={[styles.container, style]}>
      <LottieView
        source={source}
        autoPlay={autoPlay}
        loop={loop}
        resizeMode={resizeMode}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

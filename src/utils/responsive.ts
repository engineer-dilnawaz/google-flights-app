import { Dimensions, PixelRatio, Platform } from "react-native";

const IS_IOS = Platform.OS === "ios";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("screen");

const guidelineBaseWidth: number = 375;
const guidelineBaseHight: number = 812;

const scaleHorizontal = WINDOW_WIDTH / guidelineBaseWidth;
const scaleVertical = WINDOW_HEIGHT / guidelineBaseHight;

/**
 * The function translates a given size in device-independent pixels (DP) to pixels (PX) horizontally,
 * taking into account the device's scale factor and platform-specific adjustments.
 * @param size - The size parameter represents the size value in density-independent pixels (dp).
 * @returns the size in pixels converted from device-independent pixels (DP) to pixels (PX) for
 * horizontal orientation.
 */
function translateDPToPXHorizontal(size: number) {
  const sizeInPixels = Math.round(
    PixelRatio.roundToNearestPixel(size * scaleHorizontal)
  );

  if (size !== 1) {
    return IS_IOS ? sizeInPixels : sizeInPixels - 1;
  }

  return sizeInPixels;
}

/**
 * The function translates a given size in device-independent pixels (DP) to pixels (PX) vertically,
 * taking into account the device's scale factor and platform-specific adjustments.
 * @param size - The size parameter represents the desired size in DP (density-independent pixels) that
 * you want to convert to pixels.
 * @returns the size in pixels converted from device-independent pixels (DP) to pixels (PX) for the
 * vertical dimension.
 */
function translateDPToPXVertical(size: number) {
  const sizeInPixels = Math.round(
    PixelRatio.roundToNearestPixel(size * scaleVertical)
  );

  if (size !== 1) {
    return IS_IOS ? sizeInPixels : sizeInPixels - 1;
  }
  return sizeInPixels;
}

export { translateDPToPXVertical as HPX, translateDPToPXHorizontal as WPX };

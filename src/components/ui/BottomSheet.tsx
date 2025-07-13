import GorhomBottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";

// Define custom props
type CustomBottomSheetProps = {
  snapPoints?: (string | number)[];
  index?: number;
  enablePanDownToClose?: boolean;
  onChange?: (index: number) => void;
  style?: ViewStyle;
  handleSheetOnClose?: () => void;
};

// Forward ref to expose imperative methods
const BottomSheet = forwardRef<
  GorhomBottomSheet,
  PropsWithChildren<CustomBottomSheetProps>
>(
  (
    {
      children,
      snapPoints = ["25%", "50%", "90%"],
      index = 1,
      enablePanDownToClose = true,
      onChange,
      style,
      handleSheetOnClose,
    },
    ref
  ) => {
    const localRef = useRef<GorhomBottomSheet>(null);
    const styles = useStyles();

    useImperativeHandle(ref, () => localRef.current as GorhomBottomSheet, []);

    const handleSheetChanges = useCallback(
      (i: number) => {
        console.log("BottomSheet changed to index:", i);
        onChange?.(i);
      },
      [onChange]
    );

    return (
      <GestureHandlerRootView style={styles.container}>
        <GorhomBottomSheet
          ref={localRef}
          snapPoints={snapPoints}
          index={index}
          enablePanDownToClose={enablePanDownToClose}
          onChange={handleSheetChanges}
          style={style}
          onClose={handleSheetOnClose}
        >
          <BottomSheetView style={styles.contentContainer}>
            {children}
          </BottomSheetView>
        </GorhomBottomSheet>
      </GestureHandlerRootView>
    );
  }
);

BottomSheet.displayName = "BottomSheet";

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      flex: 1,
    },
  });
};

export default BottomSheet;

import React, { useMemo, useRef } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import LocationDetail from "./LocationDetail";

const LocationDetailSheet = ({ location }) => {
  const ref = useRef();
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const fullHeight = SCREEN_HEIGHT - 400;
  const snapPoints = useMemo(() => [fullHeight, fullHeight], [fullHeight]);

  return (
    <>
      <BottomSheet ref={ref} index={1} snapPoints={snapPoints} enablePanDownToClose={true}>
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <LocationDetail location={location} />
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default LocationDetailSheet;

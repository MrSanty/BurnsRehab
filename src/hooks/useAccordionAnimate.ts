import { useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export const useAccordionAnimate = (initialState: number, isActive: boolean) => {
  const heightValue = useSharedValue(initialState);

  const heightStyle = useAnimatedStyle(() => ({
    maxHeight: `${heightValue.value}%`,
    overflow: 'hidden'
  }))

  useEffect(() => {
    heightValue.value = withTiming(isActive ? 100 : 0, { duration: 200 });
  }, [ isActive ])

  return heightStyle;
}
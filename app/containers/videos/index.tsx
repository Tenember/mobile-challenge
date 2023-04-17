import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { observer } from "mobx-react-lite";
import { ResizeMode, Video } from "expo-av";

import { AppStyle } from "../../styles/screen";
import { useStores } from "../../stores";

const Videos = () => {
  const { VideosStore } = useStores();
  const { width } = useWindowDimensions(); // Get the width of the screen to use for the ScrollView
  const [focusedVideoIndex, setFocusedVideoIndex] = React.useState(0);

  // Fetch the videos from the API
  useEffect(() => {
    VideosStore.fetch();
  }, [VideosStore]);

  // Handle the scroll event of the ScrollView to get the focused video index
  const handleScroll = React.useCallback(
    ({
      nativeEvent: {
        contentOffset: { x },
      },
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offset = Math.round(x / width); // Get the offset of the ScrollView
      setFocusedVideoIndex(offset);
    },
    [setFocusedVideoIndex]
  );

  return (
    <View style={AppStyle.container}>
      <ScrollView
        horizontal
        style={Styles.scrollView}
        snapToInterval={width} // Snap to the next video
        decelerationRate={"fast"} // Faster decelerationRate to make the user experience better
        onScroll={handleScroll}
        scrollEventThrottle={16}
        pagingEnabled
      >
        {VideosStore.list.map((video, index) => (
          <Video
            key={index}
            style={[Styles.video, { width }]}
            source={{ uri: video.videoUrl }}
            shouldPlay={focusedVideoIndex === index}
            useNativeControls={false}
            isLooping
            resizeMode={ResizeMode.COVER}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  video: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#111",
  },
});

export default observer(Videos);

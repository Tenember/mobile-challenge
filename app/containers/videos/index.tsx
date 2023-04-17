import React, { useEffect } from "react";
import {
  Dimensions,
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

  // Fetch the videos from the API
  useEffect(() => {
    VideosStore.fetch();
  }, [VideosStore]);

  // TODO : Stop the first video when the user scrolls to the next video and start the next video

  return (
    <View style={AppStyle.container}>
      <ScrollView
        horizontal
        style={Styles.scrollView}
        snapToInterval={width} // Snap to the next video
        decelerationRate={"fast"} // Faster decelerationRate to make the user experience better
      >
        {VideosStore.list.map((video, index) => (
          <Video
            key={index}
            style={(Styles.video, { width: width })} // Set the width of the video to the width of the screen
            source={{ uri: video.videoUrl }}
            shouldPlay={index === 0}
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

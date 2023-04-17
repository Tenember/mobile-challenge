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

  return (
    <View style={AppStyle.container}>
      <ScrollView
        horizontal
        style={Styles.scrollView}
        snapToInterval={width} // Snap to the next video
        decelerationRate={"fast"} // Faster decelerationRate to make the user experience better
      >
        <Video
          style={(Styles.video, { width: width })} // Set the width of the video to the width of the screen
          source={{
            uri: "https://res.cloudinary.com/hsiz9ovy1/video/upload/v1680209329/sharing/ending_wp443t.mp4",
          }}
          shouldPlay={true}
          useNativeControls={true}
          isLooping
          resizeMode={ResizeMode.COVER}
        />
        <Video
          style={(Styles.video, { width: width })}
          source={{
            uri: "https://res.cloudinary.com/hsiz9ovy1/video/upload/v1680209329/sharing/ending_wp443t.mp4",
          }}
          shouldPlay={true}
          useNativeControls={false}
          isLooping
          resizeMode={ResizeMode.COVER}
        />
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

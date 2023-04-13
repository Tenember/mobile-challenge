import React from "react";
import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react-lite";
import { ResizeMode, Video } from "expo-av";

import { AppStyle } from "../../styles/screen";
import { useStores } from "../../stores";

const Videos = () => {
  const { VideosStore } = useStores();

  return (
    <View style={AppStyle.container}>
      {/*
        Todo #2:
        - Create a horizontal scroll view
        - Add fetched videos to the scroll view
      */}
      <Video
        style={Styles.video}
        source={{
          uri: "https://res.cloudinary.com/hsiz9ovy1/video/upload/v1680209329/sharing/ending_wp443t.mp4",
        }}
        shouldPlay={true}
        useNativeControls={false}
        isLooping
        resizeMode={ResizeMode.COVER}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  video: {
    flex: 1,
    width: "100%",
    backgroundColor: "#111",
  },
});

export default observer(Videos);

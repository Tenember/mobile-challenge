import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import { ResizeMode, Video } from "expo-av";

import { AppStyle } from "../../styles/screen";
import { useStores } from "../../stores";

const Videos = () => {
  const { VideosStore } = useStores();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(VideosStore.list);
  }, [VideosStore.list]);

  if (!videos.length) {
    return (
      <View style={AppStyle.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={AppStyle.container}>
      {/*
        Todo #2:
        - Fetch videos from the Videos store
        - Create a horizontal scroll view
        - Add fetched videos to the scroll view
      */}
      <Video
        style={Styles.video}
        source={{
          uri: videos[0].videoUrl,
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

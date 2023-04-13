import React from "react";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { AppStyle } from "../../styles/screen";

const Settings = () => {
  return (
    <View style={AppStyle.container}>
      <Ionicons name={"settings-outline"} color={"#ccc"} size={30} />
      <Text style={AppStyle.pagePlaceholderText}>
        Not part of this challenge
      </Text>
    </View>
  );
};

export default Settings;

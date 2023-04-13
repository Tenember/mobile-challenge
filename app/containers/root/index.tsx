import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react-lite";
import Ionicons from "@expo/vector-icons/Ionicons";

import { navigationRef } from "../../services/navigation";
import Friends from "../friends";
import Notifications from "../notifications";
import Settings from "../settings";
import Videos from "../videos";

const BottomTab = createBottomTabNavigator();

const tabBarStyle = {
  backgroundColor: "#000",
  borderTopWidth: 1,
  borderTopColor: "rgba(255, 255, 255, 0.1)",
};

const screenOptions: BottomTabNavigationOptions = {
  tabBarStyle,
  tabBarShowLabel: false,
  tabBarActiveTintColor: "#fff",
  tabBarInactiveTintColor: "#999",
  tabBarHideOnKeyboard: true,
  unmountOnBlur: true,
};

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTab.Navigator
        initialRouteName="Videos"
        screenOptions={screenOptions}
      >
        <BottomTab.Screen
          name="Videos"
          component={Videos}
          options={{
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTitleStyle: {
              color: "#fff",
            },
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Friends"
          component={Friends}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default observer(Root);

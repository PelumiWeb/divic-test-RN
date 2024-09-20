import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Image } from "react-native";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Icon } from "@/assets/images/icons/Icon";
import AvatarIcon from "@/components/Icons/AvatarIcon";
import ScanIcon from "@/components/Icons/BarcodeIcon";
import Shipment from "@/components/Icons/ShipmentIcon";
import WalletIcon from "@/components/Icons/WalletIcon";

const image = require("@/assets/images/boxes-icon.jpg");

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon({
  focused,
  iconName,
}: {
  iconName: string;
  color?: string;
  focused?: boolean;
  Icon?: any;
}) {
  if (iconName === "index") {
    return <Shipment color={focused ? "#2F50C1" : "#A7A3B3"} />;
  } else if (iconName === "scan") {
    return <ScanIcon color={focused ? "#2F50C1" : "#A7A3B3"} />;
  } else if (iconName === "wallet") {
    return <WalletIcon color={focused ? "#2F50C1" : "#A7A3B3"} />;
  } else {
    return <AvatarIcon color={focused ? "#2F50C1" : "#A7A3B3"} />;
  }

  // return <Shipment color={"#2F50C1"} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5B4CCC",
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarInactiveTintColor: "#A7A3B3",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shipments",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon iconName="index" focused={focused} color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={"white"}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon iconName="scan" focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              iconName="wallet"
              focused={focused}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon iconName="profile" focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

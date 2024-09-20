import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginIntro from "@/components/Icons/LoginIntroIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import {  useNavigation } from "expo-router";
const { height, width } = Dimensions.get("screen");

type Props = {};

const splash = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <LoginIntro />
      <CustomButton
        disabled={false}
        backgroundColor="white"
        onPress={() => navigation.navigate("login")}
        textColor={"#2F50C1"}
        isFormValid={true}
   
      />
    </SafeAreaView>
  );
};

export default splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F50C1",
    flex: 1,
    height,
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

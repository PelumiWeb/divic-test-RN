import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Spinner } from "native-base";

const { height, width } = Dimensions.get("screen");

type Props = {
  backgroundColor: string;
  textColor: string;
  onPress: () => any;
  disabled?: boolean;
  isFormValid?: boolean;
  top: number;
  bottom: number;
  loading: boolean;
};

//   backgroundColor,
//   textColor,
//   onPress,
//   isFormValid,
// }: Props

const CustomButton = ({
  onPress,
  backgroundColor,
  textColor,
  disabled,
  isFormValid,
  bottom,
  loading,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={!disabled && onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          bottom: bottom,
        },
      ]}>
      {loading ? (
        <Spinner accessibilityLabel="Loading posts" color="white" />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>Login</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    // paddingVertical: 20,
    height: 60,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

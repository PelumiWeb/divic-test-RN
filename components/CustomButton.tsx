import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { backgroundColor } from "@shopify/restyle";

const { height, width } = Dimensions.get("screen");

type Props = {
  backgroundColor: string;
  textColor: string;
  onPress: () => any;
  disabled?: boolean;
  isFormValid?: boolean;
  top: number;
  bottom: number;
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
}: Props) => {
  return (
    <TouchableOpacity
      disabled={false}
      onPress={onPress}
      // style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
      style={[
        styles.button,
        {
          opacity: isFormValid ? 1 : 0.5,
          backgroundColor: backgroundColor,
          bottom: bottom
        },
      ]}>
      <Text style={[styles.text, { color: textColor }]}>Login</Text>
    </TouchableOpacity>
  );
};
// return (
//   <TouchableOpacity
//     disabled={false}
//     onPress={onPress}
//     // style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
//     style={[
//       styles.button,
//       { opacity: isFormValid ? 1 : 0.5, backgroundColor: backgroundColor },
//     ]}>
//     <Text style={[styles.text, { color: textColor }]}>Login</Text>
//   </TouchableOpacity>
// );

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 20,
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

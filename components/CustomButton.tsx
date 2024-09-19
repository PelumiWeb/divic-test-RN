import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { backgroundColor } from '@shopify/restyle'

const { height, width } = Dimensions.get("screen");


type Props = {
  backgroundColor: string;
  textColor: string;
  onPress: () => any;
  disabled?: boolean;
  isFormValid?: boolean;
};

const CustomButton = ({
  backgroundColor,
  textColor,
  onPress,
  isFormValid,
}: Props) => {

  console.log(isFormValid)
  return (
    <TouchableOpacity
      disabled={false}
      onPress={onPress}
      // style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
      style={[
        styles.button,
        { opacity: isFormValid ? 1 : 0.5, backgroundColor: backgroundColor },
      ]}>
      <Text style={[styles.text, { color: textColor }]}>Login</Text>
    </TouchableOpacity>
  );
};

export default CustomButton

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
    top: height * 0.9,
    alignSelf: "center",
    borderRadius: 10,
  
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
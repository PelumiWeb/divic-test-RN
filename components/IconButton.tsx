import { StyleSheet, Text, View , TouchableOpacity} from "react-native";
import React from "react";
import FilterIcon from "./Icons/Filter";

type Props = {
  backgroundColor?: string;
  text: string;
  textColor: string;
  Icon: any
onPress: () => void;
};

const IconButton = ({ backgroundColor, text, textColor, Icon, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor }]}onPress={onPress}>
      <Icon />
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: 160,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // paddingTop: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
});

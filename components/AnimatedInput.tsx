import { StyleSheet, Text, TextInput, View, Animated } from "react-native";
import React from "react";

type Props = {
  label: string;
  text: string;
  setText: (data: any) => any;
  keyBoardType: string;
  secureTextEntry?: boolean;
};

const AnimatedInput = ({
  label,
  keyBoardType,
  text,
  setText,
  secureTextEntry=false,
}: Props) => {
  //   const [text, setText] = React.useState("");
  const floatingLabelAnimation = React.useRef(
    new Animated.Value(text ? 1 : 0)
  ).current;
  const handleFocus = () => {
    Animated.timing(floatingLabelAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };
  const handleBlur = () => {
    if (!text) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const floatinLabelStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 2],
    }),
    left: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [25, -8],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 10],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, floatinLabelStyle]}>
        {label}
      </Animated.Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {/* <Text>https</Text> */}

        <TextInput
          inlineImageLeft="search_icon"
          value={text}
          style={styles.textInput}
          placeholder=""
          onChangeText={(val) => setText(val)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyBoardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default AnimatedInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F4F2F8",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    color: "#2F50C1",
    paddingLeft: 10,
    paddingVertical: 5,
    // borderColor: "red",
    // borderWidth: 1,
    width: "100%",
  },

  label: {
    fontSize: 16,
    color: "#A7A3B3",
    paddingLeft: 10,
    position: "absolute",
    top: 15,
    left: 25,
  },
});

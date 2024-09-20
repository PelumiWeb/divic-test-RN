import { StyleSheet, Text, TextInput, View, Animated } from "react-native";
import React from "react";

type Props = {
  label: string;
  text: string;
  setText: (data: any) => any;
  keyBoardType: string;
  secureTextEntry?: boolean;
  url: boolean;
};

const AnimatedInput = ({
  label,
  keyBoardType,
  text,
  setText,
  secureTextEntry = false,
  url,
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
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 10],
    }),
  };

  const floatinLabelURLStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 2],
    }),
    left: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [25, -35],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 10],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          !url ? styles.label : styles.UrlLabel,
          !url ? floatinLabelStyle : floatinLabelURLStyle,
        ]}>
        {label}
      </Animated.Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {url ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
              <Text style={styles.urlText}>https://</Text>
              <View style={styles.seperator} />
            <TextInput
              inlineImageLeft="search_icon"
              value={text}
              style={styles.textInput}
              placeholder=""
              onChangeText={(val) => setText(val)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              keyboardType={url ? "url" : keyBoardType}
              secureTextEntry={secureTextEntry}
            />
          </View>
        ) : (
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
        )}
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
    position: "relative",
    borderColor: "black",
    borderWidth: 1,
  },
  textInput: {
    fontSize: 16,
    color: "#2F50C1",
    paddingLeft: 10,
    // paddingVertical: 5,
    // borderColor: "red",
    // borderWidth: 1,
    width: "100%",
  },
  textInputUrl: {
    fontSize: 16,
    color: "#2F50C1",
    // paddingVertical: 5,
    // borderColor: "red",
    // borderWidth: 1,
    width: "100%",
  },

  urlText: {
    color: "#58536E",
    fontSize: 14,
    paddingLeft: 5,
  },
  seperator: {
    width: 1,
    height: 15,
    backgroundColor: "gray",
    marginLeft: 5
  },
  label: {
    fontSize: 16,
    color: "#A7A3B3",
    paddingLeft: 5,

    position: "absolute",
    zIndex: 10,
    left: 5,
    top: 5,
  },
  UrlLabel: {
    fontSize: 16,
    color: "#A7A3B3",
    paddingLeft: 40,
    position: "absolute",
    left: 25,
  },
});

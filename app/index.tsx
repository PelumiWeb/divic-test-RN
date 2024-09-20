import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginIntro from "@/components/Icons/LoginIntroIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "expo-router";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSequence,
  withDelay,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
const { height, width } = Dimensions.get("screen");
import LottieView from "lottie-react-native";

type Props = {};
// const MyAnimatedView = Animated.createAnimatedComponent(CustomButton);

const splash = (props: Props) => {
  const navigation = useNavigation();
  const opacity = useSharedValue(0);
  const opacityButton = useSharedValue(0);
  const animation = React.useRef<LottieView>(null);

  const [animationFinished, setAnimationFinished] = React.useState(false);

  const handleAnimationFinish = () => {
    setAnimationFinished(true); // Show children once animation is finished
  };

  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const startAnimationSequence = () => {
    // First, fade out the first box
    opacity.value = withSequence(
      withTiming(0, { duration: 1000 }), // Fade out
      withDelay(
        500, // Wait for 500ms before starting the next animation
        withTiming(1, { duration: 1000 }) // Reset the opacity back to 1 (fade in)
      )
    );

    // After the first animation completes, scale the second box
    opacityButton.value = withDelay(
      1500, // Start after the first animation + delay (1s fade + 0.5s delay)
      withTiming(1.5, { duration: 1000 }) // Scale the second box
    );
  };

  React.useEffect(() => {
    // const showAnimation = () => {
    //   // opacity.value = withSpring(1);
    // };
    // showAnimation();
    startAnimationSequence();
  }, []);

  const randomWidth = useSharedValue(0);

  // React.useEffect(() => {
  //   const showAnimation = () => {
  //     // opacity.value = withSpring(1);
  //     randomWidth.value = 1;
  //   };
  //   showAnimation();
  // }, []);

  const config = {
    duration: 1000,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  return (
    <View style={styles.container}>
      {animationFinished ? (
        <View style={[styles.container]}>
          <Animated.View style={style}>
            <LoginIntro height={48} />
          </Animated.View>
          {/* <Button title="name" /> */}
          <Animated.View style={buttonStyle}>
            <CustomButton
              disabled={false}
              backgroundColor="white"
              onPress={() => navigation.navigate("login")}
              textColor={"#2F50C1"}
              isFormValid={true}
              bottom={-320}
            />
          </Animated.View>
        </View>
      ) : (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width,
            height,
            // backgroundColor: "#fff",
          }}
          loop={false}
          source={require("../assets/Intro.json")}
          onAnimationFinish={handleAnimationFinish}
        />
      )}
    </View>
  );
};

export default splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F50C1",
    flex: 1,
    height: height,
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: "black",
    margin: 30,
  },
});

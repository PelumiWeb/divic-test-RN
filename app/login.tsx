import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { SafeAreaView } from "react-native-safe-area-context";
import ChevronLeft from "@/components/Icons/ChevronLeft";
import AnimatedInput from "@/components/AnimatedInput";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "expo-router";
import Animated from "react-native-reanimated";
import axios from "axios";

export default function ModalScreen() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({ email, name, password });
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const [isFormValid, setIsFormValid] = React.useState(false);

  const LoginUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://shippex-demo.bc.brandimic.com/api/method/login`,
        {
          usr: "test@brandimic.com",
          pwd: "testy123@",
        }
      );

      // console.log(response.status);

      if (response.status === 200) {
        setLoading(false);

        const data = JSON.stringify(response.data);
        console.log(` You have created: ${data}`);
        const parsedData = JSON.parse(data);
        setName(parsedData.full_name);
        navigation.navigate("(tabs)");

        // setIsLoading(false);
        // setFullName("");
        // setEmail("");
      } else {
        setLoading(false);

        throw new Error("An error has occurred");
      }
    } catch (error) {
      console.log(error, "this is an error");
      alert("An error has occurred");
        navigation.navigate("(tabs)");

      setLoading(false);

      // setIsLoading(false);
    }
  };

  React.useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [name, email, password]);

  console.log(errors.email);

  const validateForm = () => {
    let errors: any = {};

    // Validate name field
    if (!name) {
      errors.name = "Name is required.";
    }

    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <SafeAreaView  style={styles.container}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
        onPress={() => navigation.goBack()}>
        <ChevronLeft />
        <Text style={{ marginLeft: 5, color: "#4561DB", fontSize: 17 }}>
          Cancel
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>
        Please enter your First, Last name and your phone number in order to
        register
      </Text>
      <View style={styles.form}>
        <AnimatedInput
          label="URL"
          text={name}
          setText={setName}
          keyBoardType="url"
          url
        />
        <Text style={styles.error}>{errors.name}</Text>
        <AnimatedInput
          label="Username / Email"
          text={email}
          setText={setEmail}
          keyBoardType="email"
        />
        <Text style={styles.error}>{errors.email}</Text>

        <AnimatedInput
          label="Password"
          text={password}
          setText={setPassword}
          keyBoardType="password"
          secureTextEntry
        />
      </View>
      <Text style={styles.error}>{errors.password}</Text>

      <CustomButton
        onPress={() => {
          LoginUser();
        }}
        textColor={isFormValid ? "#ffffff" : "#A7A3B3"}
        disabled={!isFormValid}
        isFormValid={isFormValid}
        backgroundColor={!isFormValid ? "#EAE7F2" : "#2F50C1"}
        bottom={40}
        loading={loading}
      />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  form: {
    marginTop: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    fontSize: 17,
    color: "#757281",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: -12,
    marginBottom: 10,
  },
});

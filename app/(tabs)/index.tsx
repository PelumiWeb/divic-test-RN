import {
  StyleSheet,
  View,
  Text,
  
  TextInput,
  FlatList,
  RefreshControl,
  Dimensions
} from "react-native";
import React from "react"

import EditScreenInfo from "@/components/EditScreenInfo";
import { Header } from "react-native/Libraries/NewAppScreen";
import HomeHeader from "@/components/HomeHeader";
import SearchIcon from "@/components/Icons/searchIcon";
// import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { CheckBox } from "@rneui/themed";
import IconButton from "@/components/IconButton";
import FilterIcon from "@/components/Icons/Filter";
import ScanIcon from "@/components/Icons/ScanIcon";
import Shipment from "@/components/Shipment";
import { SafeAreaView } from "react-native-safe-area-context";
import { RenderBottomModal } from "@/components/BottomModals";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },

  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const { height, width } = Dimensions.get("screen");

export default function shipmentScreen() {
    const [refreshing, setRefreshing] = React.useState(false);
     const onRefresh = React.useCallback(() => {
       setRefreshing(true);
       setTimeout(() => {
         setRefreshing(false);
       }, 2000);
     }, []);
     const [check1, setCheck1] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      <HomeHeader />
      <View>
        <Text style={{ fontSize: 14, color: "000000" }}>Hello,</Text>
        <Text style={{ fontSize: 28, color: "black" }}>Ibrahim Shaker</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.textInputWrapper}>
          <SearchIcon />
          <TextInput
            placeholderTextColor={"#A7A3B3"}
            placeholder="Search"
            style={styles.textInput}
          />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <IconButton
          text="Filter"
          backgroundColor="#F4F2F8"
          textColor="#58536E"
          Icon={() => <FilterIcon />}
        />
        <IconButton
          text="Add Scan"
          backgroundColor="#2F50C1"
          textColor="#FFFFFF"
          Icon={() => <ScanIcon />}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Shipment</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <CheckBox
            title="Mark All"
            checked={check1}
            // onPress={() => setCheck1(!check1)}
          />
          {/* <Text style={{ marginLeft: 10 }}>Mark All</Text> */}
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Shipment title={item.title} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {/* <RenderBottomModal
        children={<View><Text>This is the modal</Text></View>}
        height={height * 0.3}
        open={true}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    height: 44,
    backgroundColor: "#F4F2F8",
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 10,
  },

  textInputWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },

  textInput: {
    fontSize: 14,
    width: "90%",
    overflow: "hidden",
    color: "#A7A3B3"
    
    // paddingVertical: 6,
    // paddingHorizontal: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  RefreshControl,
  Dimensions,
} from "react-native";
import React from "react";

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
import axios from "axios";

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

const shippingData = [
  {
    id: "1",
    companyName: "AWB",
    itemId: "23485095910",
    from: "Cairo",
    to: "Alexandra",
    status: "CANCELED",
  },
  {
    id: "2",
    companyName: "AWB",
    itemId: "23422095910",
    from: "Cairo",
    to: "Alexandra",
    status: "DELIVERED",
  },
  {
    id: "3",
    companyName: "AWC",
    itemId: "23422095919",
    from: "Giza",
    to: "Nasr",
    status: "CANCELED",
  },
  {
    id: "4",
    companyName: "ABC",
    itemId: "23422096719",
    from: "AL - MARJ",
    to: "KIRDASH",
    status: "REJECTED",
  },
  {
    id: "5",
    companyName: "ABC",
    itemId: "23422096719",
    from: "AL - MAAD",
    to: "AL Barajil",
    status: "ON HOLD",
  },
  {
    id: "6",
    companyName: "ABC",
    itemId: "23422096719",
    from: "AL - MARJ",
    to: "KIRDASH",
    status: "DELIVERED",
  },
  {
    id: "7",
    companyName: "ABC",
    itemId: "23422096719",
    from: "AL - MARJ",
    to: "KIRDASH",
    status: "DELIVERED",
  },
  {
    id: "8",
    companyName: "ABC",
    itemId: "23422096719",
    from: "AL - MAAD",
    to: "AL Barajil",
    status: "LOST",
  },
  {
    id: "9",
    companyName: "ABC",
    itemId: "23422096719",
    from: "AL - MAAD",
    to: "AL Barajil",
    status: "PENDING",
  },
  {
    id: "10",
    companyName: "ABC",
    itemId: "23422096719",
    from: "AL - MAAD",
    to: "AL Barajil",
    status: "PUTAWAY",
  },
];

const { height, width } = Dimensions.get("screen");

const filteredParams = [
  "Received",
  "Putaway",
  "Delivered",
  "Canceled",
  "Rejected",
  "Lost",
  "On Hold",
];

export default function shipmentScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedFilterParams, setSelectedFilterParams] = React.useState<
    string[]
  >([]);
  const [loading, setLoading] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [check1, setCheck1] = React.useState(false);

  const toggleFilterParams = (category: string) => {
    setSelectedFilterParams((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const filteredData = React.useMemo(() => {
    console.log("yooooo");
    return shippingData.filter((item) => {
      const statusMatch = item.status
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const companyMatch = item.companyName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const itemIdMatch = item.itemId
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedFilterParams.length === 0 ||
        selectedFilterParams.includes(item.status);
      return statusMatch || matchesCategory;
    });
  }, [searchTerm, selectedFilterParams]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://shippex-demo.bc.brandimic.com/api/method/frappe.client.get_list",
        {
          params: {
            doctype: "AWB Status", // Make sure to provide the correct doctype
            // Other parameters if needed
          },
        }
      );

      console.log(response.data.message);

      if (response.status === 200) {
        setLoading(false);

        const data = JSON.stringify(response.data);
        console.log(` You have created: ${data}`);
      } else {
        setLoading(false);
        throw new Error("An error has occurred");
      }
    } catch (error) {
      console.log(error, "this is an error");
      alert("An error has occurred");
      setLoading(false);
    }
  };
  fetchData();

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View>
        <Text style={{ fontSize: 14, color: "000000" }}>Hello,</Text>
        <Text style={{ fontSize: 28, color: "black" }}>{"Ibrahim Shaker"}</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.textInputWrapper}>
          <SearchIcon />
          <TextInput
            value={searchTerm}
            onChangeText={setSearchTerm}
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
          onPress={() => setOpen(true)}
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
            onPress={() => setCheck1(!check1)}
          />
          <Text style={{ marginLeft: 10 }}>Mark All</Text>
        </View>
      </View>

      <FlatList
        data={filteredData}
        refreshing={loading}
        renderItem={({ item }) => <Shipment data={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }
      />

      <RenderBottomModal
        filteredData={filteredParams}
        height={height * 0.4}
        open={open}
        setOpen={setOpen}
        toggleFilterParams={toggleFilterParams}
        selectedFilterParams={selectedFilterParams}
      />
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
    color: "#A7A3B3",

    // paddingVertical: 6,
    // paddingHorizontal: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

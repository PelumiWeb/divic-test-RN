import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BoxIcon from "./Icons/BoxIcon";
import InverseArrow from "./Icons/InverseArrow";
import ArrowRight from "./Icons/ArrowRight";
import { CheckBox } from "@rneui/themed";

type ItemProps = {
  companyName: string;
  itemId: string;
  from: string;
  to: string;
  status: string;
};

//  companyName: "ABC",
//     itemId: "23422096719",
//     from: "AL - MARJ",
//     to: "KIRDASH",
//     status: "CANCELED",

const Shipment = ({ data }: { data: ItemProps }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        {/* <CheckBox
          // title="value"
          checked={false}
          style={{ marginRight: 5 }}
        /> */}
        <BoxIcon />
      </View>
      <View>
        <Text style={{ fontSize: 13 }}>{data?.companyName}</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{data.itemId}</Text>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}>
          <Text
            style={{
              fontSize: 13,
              marginRight: 5,
              textTransform: "capitalize",
            }}>
            {data.from}
          </Text>
          <ArrowRight />
          <Text
            style={{
              fontSize: 13,
              marginLeft: 5,
              textTransform: "capitalize",
            }}>
            {data.to}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "white",
          padding: 5,
          borderRadius: 5,
        }}>
        <Text>{data.status}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <InverseArrow />
      </TouchableOpacity>
    </View>
  );
};
export default Shipment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    backgroundColor: "#F4F2F8",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    // marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
});

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BoxIcon from "./Icons/BoxIcon";
import InverseArrow from "./Icons/InverseArrow";
import ArrowRight from "./Icons/ArrowRight";
import { CheckBoxIcon } from "@rneui/base/dist/CheckBox/components/CheckBoxIcon";
import { ListItemCheckBox } from "@rneui/base/dist/ListItem/ListItem.CheckBox";
import { Checkbox } from "native-base";

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
// FFF3D5;
const renderMultipleBackground = (status: string) => {
  let backgroundColor;
  if (status === "REJECTED") {
    return "#D9E6FD";
  } else if (status === "CANCELED") {
    return "#F4F2F8";
  } else if (status === "DELIVERED") {
    return "#E3FAD6";
  } else if (status === "ON HOLD") {
    return "#FFF3D5";
  } else {
    return "white";
  }
};
// DB7E21

const renderMultipleColor = (status: string) => {
  let color;
  if (status === "REJECTED") {
    return "#2F50C1";
  } else if (status === "CANCELED") {
    return "#58536E";
  } else if (status === "DELIVERED") {
    return "#208D28";
  } else if (status === "ON HOLD") {
    return "#DB7E21";
  } else {
    ("white");
  }
};

const Shipment = ({ data }: { data: ItemProps }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
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
          borderColor: "#E3FAD6",
          padding: 5,
          borderRadius: 5,
          backgroundColor: renderMultipleBackground(data.status),
        }}>
        <Text style={{ color: renderMultipleColor(data.status) }}>
          {data.status}
        </Text>
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

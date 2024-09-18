import { Checkbox } from "native-base";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BoxIcon from "./Icons/BoxIcon";
import InverseArrow from "./Icons/InverseArrow";
import ArrowRight from "./Icons/ArrowRight";

type ItemProps = { title: string };

const Shipment = ({ title }: ItemProps) => (
  <View style={styles.container}>
    <View
      style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
      <Checkbox
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        style={{ marginRight: 5 }}
      />
      <BoxIcon />
    </View>
    <View>
      <Text style={{ fontSize: 13 }}>AWB</Text>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>41785691423</Text>

      <View
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        <Text style={{ fontSize: 13 }}>Cairo</Text>
        <ArrowRight />
        <Text style={{ fontSize: 13 }}>Alexandra</Text>
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
      <Text>CANCELED</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <InverseArrow />
    </TouchableOpacity>
  </View>
);
export default Shipment;

const styles = StyleSheet.create({
  container: {
    width: 361,
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

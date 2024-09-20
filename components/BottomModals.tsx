// import { closeModal } from "@/store/app/modalSlice";
import { PropsWithChildren } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import {
  Modal,
  ModalContent,
  BottomModal,
  SlideAnimation,
} from "react-native-modals";
// import { useDispatch } from "react-redux";
const { width, height } = Dimensions.get("screen");

export function RenderBottomModal({
  height,
  open,
  setOpen,
  filteredData,
  toggleFilterParams,
  selectedFilterParams,
}: PropsWithChildren & {
  height: number;
  open: boolean;
  setOpen?: any;
  filteredData: any[];
  toggleFilterParams: any;
  selectedFilterParams: [];
}) {
  return (
    <BottomModal
      modalStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      height={height}
      width={width}
      visible={open}
      //   onTouchOutside={() => dispatch(closeModal())}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setOpen(false)}>
            <Text
              style={{ color: "#2F50C1", fontSize: 16, fontWeight: "medium" }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Text
            style={{ color: "black", fontSize: 18, fontWeight: "semibold" }}>
            Filter
          </Text>
          <TouchableOpacity onPress={() => setOpen(false)}>
            <Text
              style={{ color: "#2F50C1", fontSize: 16, fontWeight: "medium" }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 13, fontWeight: "semibold" }}>
            SHIPMENT STATUS
          </Text>

          <View style={styles.filterOption}>
            {filteredData.map((data) => (
              <TouchableOpacity
                onPress={() => toggleFilterParams(data)}
                key={data}
                style={{
                  backgroundColor: "#F4F2F8",
                  padding: 10,
                  marginHorizontal: 10,
                  marginVertical: 5,
                  borderRadius: 10,
                  borderWidth: selectedFilterParams.includes(data) ? 1 : 0,
                  borderColor: selectedFilterParams.includes(data)
                    ? "#6E91EC"
                    : "transparent",
                }}>
                <Text
                  style={{
                    color: !selectedFilterParams.includes(data)
                      ? "#58536E"
                      : "#6E91EC",
                  }}>
                  {data}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#EAE7F2",
    borderStyle: "solid",
    borderWidth: 0.5,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  filterOption: {
    paddingVertical: 10,
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

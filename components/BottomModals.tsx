// import { closeModal } from "@/store/app/modalSlice";
import { PropsWithChildren } from "react";
import { Dimensions } from "react-native";
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
  children,
  height,
  open,
  setOpen,
}: PropsWithChildren & { height: number; open: boolean; setOpen?: any }) {
//   const dispatch = useDispatch();

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
      }
      children={children}
    />
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
});

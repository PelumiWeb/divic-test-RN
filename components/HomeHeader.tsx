import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserIcon from './Icons/userImage'
import LogoIcon from './Icons/logoIcon'
import BellIcon from './Icons/bellIcon'

type Props = {}

const HomeHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <UserIcon />
      <LogoIcon />
      <BellIcon />
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  }
});
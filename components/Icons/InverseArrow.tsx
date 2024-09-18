import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function InverseArrow(props:any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect y={0.5} width={24} height={24} rx={12} fill="#fff" />
      <Path
        d="M13.471 7.167h3.862m0 0v3.862m0-3.862l-4.506 4.505m-2.298 6.161H6.667m0 0v-3.862m0 3.862l4.506-4.505"
        stroke="#4561DB"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default InverseArrow;

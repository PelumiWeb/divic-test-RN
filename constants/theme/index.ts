import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";
import { Dimensions } from "react-native";

import darkMode from "./darkMode";
import { palette } from "./palette";
import type { PaddingSizesObjectType } from "./types";
import SrfValue from "@/utils/functions/SrfValue";

const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontalScale = (size: number) =>
  (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const lightTheme = createTheme({
  borderRadii: {
    lg: SrfValue(32),
    sml: SrfValue(24),
    md: SrfValue(16),
    mmd: SrfValue(14),
    none: 0,
    sm: SrfValue(8),
    xl: SrfValue(64),
    xs: SrfValue(4),
  },

  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },

  // buttonGradients: {
  //   primary: [palette.secondaryColor, palette.secondary6, palette.primaryColor],
  //   secondary: [palette.gradientBlueTop, palette.gradientBlueBottom],
  //   tatiary: [palette.gradientGreenTop, palette.gradientGreenBottom],
  // },
  buttonSizes: {
    lg: {
      paddingHorizontal: "xl",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "lg",
      paddingVertical: "md",
    },
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "md",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xxl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "sm",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  buttonVariants: {
    defaults: {
      borderRadius: "sm",
    },
    filled: {
      backgroundColor: "greenPrimary",
    },
    ghost: {
      backgroundColor: "gray100",
    },
    inverse: {
      backgroundColor: "greenPale",
    },
    none: {},
    outlined: {
      borderColor: "darkGrey",
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },
  colors: {
    ...palette,
    primaryColor: palette.greenPrimary,
    imageBackgroundTint: palette.greenPrimary,
    mainBackground: palette.whiteColor,
    textColorInverted: palette.whiteColor,
    primarybackground: palette.white,
    primarythemecolor: palette.backgroundblack,
    primaryBlack: palette.black,
    darkGrey: palette.gray100,
    textColor: palette.black,
  },

  fontSizes: {
    caption: SrfValue(12),
    h1: SrfValue(32),
    h2: SrfValue(24),
    h3: SrfValue(20),
    h4: SrfValue(18),
    h5: SrfValue(16),
    h6: SrfValue(14),
    p: SrfValue(14),
    s: SrfValue(6),
  },

  iconSizes: {
    "logo-iconsize": {
      height: SrfValue(40),
      width: SrfValue(40),
    },
    lg: {
      height: SrfValue(32),
      width: SrfValue(32),
    },
    mmd: {
      height: SrfValue(28),
      width: SrfValue(28),
    },
    m: {
      height: SrfValue(12),
      width: SrfValue(12),
    },
    mm: {
      height: SrfValue(16),
      width: SrfValue(17),
    },
    md: {
      height: SrfValue(24),
      width: SrfValue(24),
    },
    s: {
      height: SrfValue(4),
      width: SrfValue(4),
    },
    sml: {
      height: SrfValue(20),
      width: SrfValue(20),
    },
    sm: {
      height: SrfValue(16),
      width: SrfValue(16),
    },
    xl: {
      height: SrfValue(48),
      width: SrfValue(48),
    },
    xll: {
      height: SrfValue(32),
      width: SrfValue(99),
    },
    xlll: {
      height: SrfValue(38),
      width: SrfValue(140),
    },

    xxl: {
      height: SrfValue(60),
      width: SrfValue(60),
    },
    xxml: {
      height: SrfValue(70),
      width: SrfValue(70),
    },
    xs: {
      height: SrfValue(8),
      width: SrfValue(8),
    },
    xsl: {
      height: SrfValue(108),
      width: SrfValue(120),
    },
    pspxl: {
      height: SrfValue(80),
      width: SrfValue(80),
    },
    xxxl: {
      height: SrfValue(138),
      width: SrfValue(180),
    },
    xxxxl: {
      height: SrfValue(183),
      width: SrfValue(157),
    },
  },

  spacing: {
    lg: SrfValue(32),
    xlg: SrfValue(48),
    md: SrfValue(16),
    mmd: SrfValue(20),
    none: 0,
    smd: SrfValue(12),
    sm: SrfValue(8),
    sml: SrfValue(24),
    ss: SrfValue(6),
    ssm: SrfValue(8),
    xl: SrfValue(64),
    xs: SrfValue(4),
    xxl: SrfValue(128),
    xxxl: SrfValue(228),
    xxs: SrfValue(2),
    xxxs: SrfValue(1),
    rs: SrfValue(-200),
    rlg: SrfValue(-100),
    rr: SrfValue(-30),
  },

  textInputSizes: {
    lg: {
      paddingHorizontal: "lg",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "md",
      paddingVertical: "md",
    },
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "sm",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "xs",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  textInputVariants: {
    defaults: {
      borderRadius: "sm",
      fontSize: SrfValue(14),
    },
    filled: {
      backgroundColor: "paleGrey50",
      color: "primaryBlack",
    },
    none: {},
    outlined: {
      borderColor: "darkGrey",
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },

  textVariants: {
    body: {},
    bold8: {
      color: "primaryColor",
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(8),
      fontWeight: "700",
      lineHeight: verticalScale(16),
    },
    bold10: {
      color: "darkGrey",
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(10),
      fontWeight: "700",
      lineHeight: verticalScale(16),
    },
    bold12: {
      color: "darkGrey",
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(12),
      fontWeight: "700",
      lineHeight: verticalScale(16),
    },
    bold14: {
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(14),
      fontWeight: "700",
    },
    bold16: {
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(16),
      fontWeight: "700",
    },
    bold18: {
      // color: "black",
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(18),
      fontWeight: "700",
    },
    bold20: {
      // color: "black",
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(20),
      fontWeight: "700",
    },
    bold22: {
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(22),
      fontWeight: "700",
    },
    bold24: {
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(24),
      fontWeight: "700",
    },
    bold32: {
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(32),
      fontWeight: "700",
    },
    bold48: {
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(48),
      fontWeight: "700",
    },
    default: {
      // color: "black",
      fontSize: moderateScale(14),
      fontFamily: "Inter-Regular",
      // fontWeight: "100",
      fontWeight: "semibold",
    },
    semiBold14: {
      fontFamily: "Inter-SemiBold",
      fontSize: moderateScale(14),
      fontWeight: "semibold",
    },
    semiBoldGreen14: {
      fontFamily: "Inter-SemiBold",
      fontSize: moderateScale(16),
      fontWeight: "semibold",
      color: "primaryColor",
    },
    medium10: {
      fontFamily: "Inter-Medium",
      fontSize: moderateScale(10),
      fontWeight: "500",
    },
    medium12: {
      // color: "black",
      fontFamily: "Inter-Medium",
      fontSize: moderateScale(12),
      fontWeight: "700",
    },
    medium14: {
      fontFamily: "Inter-Medium",
      fontSize: moderateScale(14),
      fontWeight: "700",
    },
    medium16: {
      // color: "black",
      fontFamily: "Inter-Medium",
      fontSize: moderateScale(16),
      fontWeight: "500",
      lineHeight: verticalScale(20),
    },
    medium18: {
      fontFamily: "Inter-Medium",
      fontSize: moderateScale(18),
      fontWeight: "500",
    },
    medium22: {
      fontFamily: "Inter-Medium",
      fontSize: moderateScale(22),
      fontWeight: "500",
    },
    medium8: {
      fontFamily: "Inter-Medium",
      fontSize: moderateScale(8),
      fontWeight: "500",
    },
    none: {},
    regular9: {
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(9),
      fontWeight: "400",
      lineHeight: verticalScale(16),
    },
    regular10: {
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(10),
      fontWeight: "400",
      lineHeight: verticalScale(16),
    },
    regular12: {
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(12),
      fontWeight: "400",
      lineHeight: verticalScale(16),
    },
    regular14: {
      // color: "black",
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(14),
      fontWeight: "400",
      lineHeight: verticalScale(16),
    },
    regular16: {
      // color: "black",
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(16),
      fontWeight: "400",
      lineHeight: verticalScale(20),
    },
    regular18: {
      // color: "black",
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(18),
      fontWeight: "400",
      lineHeight: verticalScale(18),
    },
    regular22: {
      // color: "black",
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(22),
      fontWeight: "400",
      lineHeight: verticalScale(22),
    },
    regular24: {
      // color: "black",
      fontFamily: "Inter-Bold",
      fontSize: moderateScale(24),
      fontWeight: "400",
      lineHeight: verticalScale(28),
    },
    regular8: {
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(8),
      fontWeight: "400",
    },
    font10: {
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(10),
      fontWeight: "400",
      lineHeight: verticalScale(16),
    },
    font12: {
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(12),
      fontWeight: "400",
    },
    font14: {
      // color: "black",
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(14),
      fontWeight: "400",
    },
    font8: {
      fontFamily: "Inter-Regular",
      fontSize: moderateScale(8),
      fontWeight: "400",
    },
    title: {
      fontSize: moderateScale(32),
      fontWeight: "500",
      fontFamily: "Inter-Bold",
    },
  },

  zIndices: {
    modal: 100,
    overlay: 10,
  },
});

export type Theme = typeof lightTheme;

export const useTheme = () => useRestyleTheme<Theme>();

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...darkMode.colors,
  },
};

export default { darkTheme, lightTheme };

import { DefaultTheme } from "styled-components";

export const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

const media = {
  medium: customMediaQuery(1080),
  small: customMediaQuery(680),
  phone: customMediaQuery(480),
  custom: (maxwidth) => customMediaQuery(maxwidth),
};

const color = {
  dark: "#1A1929",
  dark2: "#322C44",
  dark3: "#262430",
  dark4: "#312F4A",
  dark5: "#2B2B2B",
  dark6: "#333333",
  dark7: "#000000",
  dark8: "#3C3C3C",
  main_color: "#6f94e9",
  blue: "#0075DD",
  blue2: "#5382EB",
  white: "#ffffff",
  purple: "#A590F7",
  purple2: "#9184CD",
  purple3: "#876AF8",
  purple4: "#7051E5",
  purple5: "#5C5194",
  purple6: "#39344E",
  purple7: "#DFD7FF",
  purple8: "#8981AA",
  purple9: "#53488B",
  purple10: "#5a5a5a",
  purple11: "#BCB4DB",
  purple12: "#7E71BD",
  purple13: "#887BC9",
  purple14: "#A89AD4",
  purple15: "#564B78",
  grey: "#C4C4C4",
  grey2: "#c1c1c1",
  grey3: "#F3F3F3",
  grey4: "#867FA8",
  grey5: "#655E86",
  grey6: "#645C92",
  grey7: "#EEC8D2",
  grey8: "#909090",
  grey9: "#D9D9D9",
  pink: "#E87594",
  pink2: "#BA5671",
  pink3: "#F0E2E2",
  pink4: "#B67586",
  pink5: "#EEB2C2",
  pink6: "#F01A1A",
  pink7: "#DC5378",
  pink8: "#FEBACC",
};

const themes: DefaultTheme = {
  color,
  media,
};

export default themes;

import { Colors } from "./types";

export const baseColors = {
  failure: "#fa113e",
  primary: "#fa3d7b",
  primaryBright: "#fa3d7b",
  primaryDark: "#fa3d7b",
  secondary: "#e9b965",
  success: "#15bd69",
  warning: "#fa113e",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f6f8",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeeee",
  tertiary: "#EFF4F5",
  text: "#5f7888",
  textDisabled: "#BDC2C4",
  textSubtle: "#3868b5",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fa3d7b 0%, #e9b965 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#703ddb",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fa3d7b 0%, #e9b965 100%)",
  },
};

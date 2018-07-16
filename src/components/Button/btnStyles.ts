import { Platform } from "react-native";

const platform = Platform.OS;

export const btnStyles = {
  btnTypes: {
    Primary: platform === "ios" ? "#007aff" : "#3F51B5",
    Info: "#62B1F6",
    Success: "#5cb85c",
    Danger: "#d9534f",
    Warning: "#f0ad4e",
    Dark: "#000",
    Light: "#f4f4f4"
  },
  btnSizes: {
    small: {
      height: 0,
      width: 0
    },
    medium: {
      height: 50,
      width: 100
    },
    large: {
      height: 0,
      width: 0
    }
  }
};

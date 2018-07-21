import { Platform, Dimensions } from "react-native";
import { lighten } from "polished";

const platform = Platform.OS;

const lightenUp = lighten(0.2);

const DEVICE_WIDTH = Math.floor(Dimensions.get("window").width);

interface IBtnTypes {
  [key: string]: {
    regular: string;
    light: string;
  };
}

interface IBtnSizes {
  [key: string]: {
    height: number;
    width: number;
  };
}

export const btnSizes: IBtnSizes = {
  small: {
    height: 30,
    width: DEVICE_WIDTH / 4
  },
  medium: {
    height: 55,
    width: DEVICE_WIDTH / 3
  },
  large: {
    height: 60,
    width: DEVICE_WIDTH / 2
  }
};

export const btnTypes: IBtnTypes = {
  Primary:
    platform === "ios"
      ? { regular: "#007aff", light: lightenUp("#007aff") }
      : { regular: "#3F51B5", light: lightenUp("#3F51B5") },
  Info: { regular: "#62B1F6", light: lightenUp("#62B1F6") },
  Success: { regular: "#5cb85c", light: lightenUp("#5cb85c") },
  Danger: { regular: "#d9534f", light: lightenUp("#d9534f") },
  Warning: { regular: "#f0ad4e", light: lightenUp("#f0ad4e") },
  Dark: { regular: "#000", light: lightenUp("#000") },
  Light: { regular: "#f4f4f4", light: lightenUp("#f4f4f4") }
};

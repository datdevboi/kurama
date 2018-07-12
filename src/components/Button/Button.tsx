import * as React from "react";

import {
  TouchableHighlight,
  Platform,
  TouchableOpacity,
  Text
} from "react-native";
import styled from "styled-components/native";
import { render } from "enzyme";

const platform = Platform.OS;

const btnTypes = {
  Primary: platform === "ios" ? "#007aff" : "#3F51B5",
  Info: "#62B1F6",
  Success: "#5cb85c",
  Danger: "#d9534f",
  Warning: "#f0ad4e",
  Dark: "#000",
  Light: "#f4f4f4"
};

const btnSizes = {
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
};

export interface IProps {
  /** function when Button is pressed */
  onPress?: () => void;
  /** The type of Button */
  type?:
    | "Primary"
    | "Info"
    | "Success"
    | "Danger"
    | "Warning"
    | "Dark"
    | "Light";
  /** Should button be rounded */
  rounded?: boolean;
  /** Should button be full, taking all of the space of its container */
  full?: boolean;
  /** the opacity of the button once pressed */
  activeOpacity?: number;
  /** Any styles that you want to apply to the button */
  style?: any;
  size: "small" | "medium" | "large";
}

const Btn = styled.TouchableOpacity<IProps>`
  background-color: ${props => btnTypes[props.type || "Primary"]};
  padding-top: 15;

  ${props =>
    props.rounded &&
    `
    border-radius: 10;
  `};

  ${props =>
    props.full &&
    `
    flex: 1;
  `};

  ${props =>
    props.size &&
    `
    height: ${btnSizes[props.size].height};
    width: ${btnSizes[props.size].width}
  `};
`;

export class Button extends React.Component<IProps> {
  public static defaultProps: IProps = {
    activeOpacity: 0.5,
    type: "Primary",
    size: "medium"
  };
  public render() {
    const { children, ...otherProps } = this.props;

    return <Btn {...otherProps}>{this.props.children}</Btn>;
  }
}

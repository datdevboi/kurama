import * as React from "react";

import { TouchableHighlight, Platform, TouchableOpacity } from "react-native";
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
  sm: 75
};

export interface IProps {
  children: React.ReactElement<any>;
  /** function when Button is pressed */
  onPress: () => void;
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
}

const Btn = styled.TouchableOpacity<IProps>`
  background-color: ${props => btnTypes[props.type]};
  display: flex;
  padding-top: 15;
  height: 150;
  width: 150;

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
`;

export const Button = (props: IProps) => {
  const { children, ...otherProps } = props;

  return <Btn {...otherProps}>{props.children}</Btn>;
};

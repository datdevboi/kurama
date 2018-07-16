import * as React from "react";

import {
  TouchableHighlight,
  Platform,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import styled from "styled-components/native";
import { btnStyles } from "./btnStyles";

const { btnTypes, btnSizes } = btnStyles;

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
  size?: "small" | "medium" | "large";
}

const Btn = styled.TouchableOpacity<IProps>`
  background-color: ${props => btnTypes[props.type || "Primary"]};

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

    if (Platform.OS === "ios") {
      return (
        <Btn {...otherProps}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {this.props.children}
          </View>
        </Btn>
      );
    }
  }
}

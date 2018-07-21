import * as React from "react";

import { Platform, View, TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";

import { btnSizes, btnTypes } from "./btnStyles";

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

  /** Should button be full, taking all of the space of its container */
  full?: boolean;
  /** the opacity of the button once pressed */
  activeOpacity?: number;
  /** Any styles that you want to apply to the button */
  style?: any;
  size?: "small" | "medium" | "large";
}

// IOS Button
const Btn = styled.TouchableOpacity<IProps>`
  background-color: ${props => btnTypes[props.type || "Primary"].regular};

  border-radius: 4;

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

// Android Button
const TNFBtn = styled.View<IProps>`
  background-color: ${props => btnTypes[props.type || "Primary"].regular};

  ${props =>
    props.full &&
    `
  flex: 1;
`};

  ${props =>
    props.size &&
    `
  height: ${btnSizes[props.size].height};
  width: ${btnSizes[props.size].width};
  elevation: 4;

  
`};

  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export class Button extends React.Component<IProps> {
  public static defaultProps: IProps = {
    activeOpacity: 0.5,
    type: "Primary",
    size: "medium"
  };
  public render() {
    const { children, size, type, onPress, full } = this.props;

    if (Platform.OS === "ios") {
      return (
        <Btn size={size} type={type} onPress={onPress} full={full}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {children}
          </View>
        </Btn>
      );
    }

    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(btnTypes[type || "Primary"]
          .light as string)}
      >
        <TNFBtn size={size} type={type} full={full}>
          {children}
        </TNFBtn>
      </TouchableNativeFeedback>
    );
  }
}

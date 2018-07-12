import * as React from "react";

import { TouchableHighlight } from "react-native";

export interface IProps {
  children: React.ReactElement<any>;
  /** prop1 description */
  onPress: () => void;
  /** prop2 description */
}

export const Button = (props: IProps) => (
  <TouchableHighlight onPress={props.onPress}>
    {props.children}
  </TouchableHighlight>
);

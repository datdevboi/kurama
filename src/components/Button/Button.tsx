import React from "react";

import { TouchableHighlight } from "react-native";

export interface IProps {
  children: React.ReactNode;
  /** prop1 description */
  onPress: () => null;
  /** prop2 description */
  title?: string;
}

export const Button = (props: IProps) => (
  <TouchableHighlight onPress={props.onPress}>
    {props.children}
  </TouchableHighlight>
);

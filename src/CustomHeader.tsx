import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from "native-base";

class CustomHeader extends React.Component<any> {
  public render() {
    return (
      <Header style={{ backgroundColor: "#9975B9" }}>
        <Left>
          <Icon name="ios-menu" onPress={() => this.props.drawerOpen()} />
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
export default CustomHeader;

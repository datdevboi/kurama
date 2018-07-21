import * as React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from "native-base";

class CustomHeader extends React.Component<any> {
  public render() {
    return (
      <Header style={styles.header}>
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#9975B9",
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

export default CustomHeader;

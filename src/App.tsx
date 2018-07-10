import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Container, Content, Icon, Header, Body, Title } from "native-base";
import { Home } from "./screens/Home";
import { CardExample } from "./screens/CardExample";

const CustomDrawerContentComponent = (props: any) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Title>Kurama-UI</Title>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerHeader: {
    height: 100,
    backgroundColor: "#9975B9"
  }
});

export const App = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Card: {
      screen: CardExample
    }
  },
  {
    initialRouteName: "Card",
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent
  }
);

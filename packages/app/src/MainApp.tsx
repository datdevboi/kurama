import * as React from "react";
import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Container, Content, Icon, Header, Body, Title } from "native-base";
import { Home } from "./screens/Home";
import { CardExample } from "./screens/CardExample";
import { DeckExample } from "./screens/DeckExample";
import { ButtonScreen } from "./screens/ButtonScreen";

const CustomDrawerContentComponent = (props: any) => (
  <Container style={styles.container}>
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
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
  drawerHeader: {
    height: 55,
    backgroundColor: "#9975B9"
  }
});

export const MainApp = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Card: {
      screen: CardExample
    },
    // Deck: {
    //   screen: DeckExample
    // },
    Button: {
      screen: ButtonScreen
    }
  },
  {
    initialRouteName: "Button",
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent
  }
);

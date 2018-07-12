import * as React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { Button } from "../components/Button/Button";


const {Component} = React;

export class ButtonExample extends Component<any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          drawerOpen={() => this.props.navigation.openDrawer()}
          title={"Button"}
        />
        <Button onPress={() => console.log("pressed")}>
          <Text>Hello</Text>
        </Button>
      </View>
    );
  }
}

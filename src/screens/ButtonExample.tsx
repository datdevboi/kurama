import * as React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { Button } from "../components/Button/Button";

export class ButtonExample extends React.Component<any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          drawerOpen={() => this.props.navigation.openDrawer()}
          title={"Button"}
        />
        <Button type="Primary" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Primary</Text>
        </Button>

        <Button type="Info" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Info</Text>
        </Button>

        <Button type="Success" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Success</Text>
        </Button>

        <Button type="Danger" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Danger</Text>
        </Button>
        <Button type="Dark" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Dark</Text>
        </Button>
        <Button type="Warning" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Warning</Text>
        </Button>
      </View>
    );
  }
}

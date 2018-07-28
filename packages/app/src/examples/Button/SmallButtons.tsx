import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "kurama-ui";

export class SmallButton extends React.Component<any> {
  public static displayName = "Small";
  public render() {
    return (
      <View>
        <Button
          size="small"
          type="Primary"
          onPress={() => console.log("pressed")}
        >
          <Text style={{ color: "white" }}>Primary</Text>
        </Button>
        <Button size="small" type="Info" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Info</Text>
        </Button>
        <Button
          size="small"
          type="Success"
          onPress={() => console.log("pressed")}
        >
          <Text style={{ color: "white" }}>Success</Text>
        </Button>
        <Button
          size="small"
          type="Danger"
          onPress={() => console.log("pressed")}
        >
          <Text style={{ color: "white" }}>Danger</Text>
        </Button>
        <Button size="small" type="Dark" onPress={() => console.log("pressed")}>
          <Text style={{ color: "white" }}>Dark</Text>
        </Button>
        <Button
          size="small"
          type="Warning"
          onPress={() => console.log("pressed")}
        >
          <Text style={{ color: "white" }}>Warning</Text>
        </Button>
        <Button
          size="small"
          onPress={() => console.log("pressed")}
          style={{ backgroundColor: "#db7093" }}
        >
          <Text style={{ color: "white" }}>Custom</Text>
        </Button>
      </View>
    );
  }
}

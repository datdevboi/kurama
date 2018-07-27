import * as React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { Card } from "../components/Card/Card";

export class CardExample extends React.Component<any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          drawerOpen={() => this.props.navigation.openDrawer()}
          title={"Card"}
        />
        <Card />
      </View>
    );
  }
}

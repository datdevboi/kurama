import * as React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../CustomHeader";

import { Deck } from "../components/Deck/Deck";
export class DeckExample extends React.Component<any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          drawerOpen={() => this.props.navigation.openDrawer()}
          title={"Deck"}
        />
        <Deck />
      </View>
    );
  }
}

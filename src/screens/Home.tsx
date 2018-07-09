import * as React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../CustomHeader";

export class Home extends React.Component<any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          drawerOpen={() => this.props.navigation.openDrawer()}
          title={"Home"}
        />
        <Text> Home </Text>
      </View>
    );
  }
}

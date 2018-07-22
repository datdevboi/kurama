import * as React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { componentData } from "../../config/componentData";
import { Example } from "../Docs/Example";
import { SmallButton } from "../examples/Button/SmallButtons";
import { IExample } from "../types/types";
import { getComponentData } from "../utils/getComponentData";
import { findExample } from "../utils/findExample";

const ButtonData: any = getComponentData(componentData, "Button");
const ButtonExamples = ButtonData.examples;

const Examples = {
  ["Small"]: { component: SmallButton, ...findExample(ButtonExamples, "Small") }
};

export class ButtonScreen extends React.Component<any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          drawerOpen={() => this.props.navigation.openDrawer()}
          title={"Button"}
        />
        <View style={{ flex: 1 }}>{}</View>
      </View>
    );
  }
}

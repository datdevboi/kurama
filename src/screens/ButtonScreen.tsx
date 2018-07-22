import * as React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { Button } from "../components/Button/Button";
import { componentData } from "../../config/componentData";
import { CodeExample } from "../Docs/CodeExample";
import { Example } from "../Docs/Example";

const ButtonExamples: [
  {
    name: string;
    filePath: string;
    code: string;
  }
] = componentData.filter(c => c.name === "Button")[0].examples;
export class ButtonScreen extends React.Component<any> {
  private renderExamples = () => {
    return ButtonExamples.map(
      (
        example: { name: string; filePath: string; code: string },
        index: number
      ) => {
        return (
          <Example
            key={index}
            name={example.name}
            path={example.filePath}
            code={example.code}
          />
        );
      }
    );
  };
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          drawerOpen={() => this.props.navigation.openDrawer()}
          title={"Button"}
        />
        <View style={{ flex: 1 }}>{this.renderExamples()}</View>
      </View>
    );
  }
}

import * as React from "react";
import { View, Text } from "react-native";
import { CodeExample } from "./CodeExample";
import { Button } from "../components/Button/Button";

interface IExampleProps {
  name: string;
  code: string;
  path: string;
}

interface IState {
  showCode: boolean;
}
export class Example extends React.Component<IExampleProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showCode: false
    };
  }

  private toggleCode = () => {
    this.setState(prevState => ({
      showCode: !prevState.showCode
    }));
  };

  public render() {
    const { name, path, code } = this.props;
    const ExampleComponent = require(path);
    return (
      <View>
        <Text>{name}</Text>
        <ExampleComponent />

        <Button onPress={this.toggleCode}>
          <Text>{this.state.showCode ? "Hide" : "Show"} Code</Text>
        </Button>

        {this.state.showCode && <CodeExample code={code} />}
      </View>
    );
  }
}

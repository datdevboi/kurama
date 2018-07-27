import * as React from "react";
import { View, Text } from "react-native";
import { CodeExample } from "./CodeExample";
import { Button } from "../components/Button/Button";

interface IExampleProps {
  name: string;
  code: string;
  path?: string;
  component: any;
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

  public async componentDidMount() {
    // const Component = await import(this.props.path);
  }

  private toggleCode = () => {
    this.setState(prevState => ({
      showCode: !prevState.showCode
    }));
  };

  public render() {
    const { name, path, code, component: Component } = this.props;

    return (
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 25, marginBottom: 10 }}>{name}</Text>
        <Component />

        <View style={{ marginTop: 20 }}>
          <Button onPress={this.toggleCode}>
            <Text>{this.state.showCode ? "Hide" : "Show"} Code</Text>
          </Button>

          {this.state.showCode && <CodeExample code={code} />}
        </View>
      </View>
    );
  }
}

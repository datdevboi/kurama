import * as React from "react";
import { Font } from "expo";
import { MainApp } from "./src/MainApp";
import { View, Text } from "react-native";

class App extends React.Component<any> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true
    };
  }
  public async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    this.setState({ loading: false });
  }
  public render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading.....</Text>
        </View>
      );
    }
    return <MainApp />;
  }
}
export default App;

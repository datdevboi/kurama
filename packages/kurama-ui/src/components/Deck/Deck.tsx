import * as React from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  PanResponder,
  PanResponderInstance
} from "react-native";

const Users = [
  { id: "1", uri: require("../../../assets/deck-1.jpg") },
  { id: "2", uri: require("../../../assets/deck-2.jpg") },
  { id: "3", uri: require("../../../assets/deck-3.jpg") },
  { id: "4", uri: require("../../../assets/deck-4.jpg") },
  { id: "5", uri: require("../../../assets/deck-5.jpg") }
];

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
export class Deck extends React.Component<any, any> {
  public panResponser: PanResponderInstance;
  public position: Animated.ValueXY;
  constructor(props: any) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.position = new Animated.ValueXY();
    this.panResponser = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (event, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (event, gestureState) => {}
    });
  }
  public renderUsers = () => {
    return Users.map((item, index) => {
      return (
        <Animated.View
          {...this.panResponser.panHandlers}
          key={item.id}
          style={[
            {
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: "absolute"
            },
            {
              transform: this.position.getTranslateTransform()
            }
          ]}
        >
          <Image
            source={item.uri}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderRadius: 20
            }}
          />
        </Animated.View>
      );
    }).reverse();
  };
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }} />
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{ height: 60 }} />
      </View>
    );
  }
}

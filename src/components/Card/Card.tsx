import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  SafeAreaView
} from "react-native";

const images = [
  { id: 1, src: require("../../../assets/1.jpg") },
  { id: 2, src: require("../../../assets/1.jpg") },
  { id: 3, src: require("../../../assets/1.jpg") },
  { id: 4, src: require("../../../assets/1.jpg") }
];

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export class Card extends React.Component<any, any> {
  public allImages: any;
  public oldPosition: any;
  public position: any;
  public dimensions: any;
  public viewImage: any;
  public animation: any;
  public state: any;
  public activeImageStyle: any;
  constructor(props: any) {
    super(props);
    this.state = {
      activeImage: null
    };

    this.allImages = {};
    this.oldPosition = {};
    this.position = new Animated.ValueXY();
    this.dimensions = new Animated.ValueXY();
    this.animation = new Animated.Value(0);
    this.activeImageStyle = null;
  }

  public openImage = (index: number) => {
    this.allImages[index].measure((x, y, width, height, pageX, pageY) => {
      (this.oldPosition.x = pageX),
        (this.oldPosition.y = pageY),
        (this.oldPosition.width = width);
      this.oldPosition.height = height;

      this.position.setValue({
        x: pageX,
        y: pageY
      });

      this.dimensions.setValue({
        x: width,
        y: height
      });

      this.setState(
        {
          activeImage: images[index]
        },
        () => {
          this.viewImage.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {
            Animated.parallel([
              Animated.timing(this.position.x, {
                toValue: dPageX,
                duration: 300
              }),
              Animated.timing(this.position.y, {
                toValue: dPageY,
                duration: 300
              }),
              Animated.timing(this.dimensions.x, {
                toValue: dWidth,
                duration: 300
              }),
              Animated.timing(this.dimensions.y, {
                toValue: dHeight,
                duration: 300
              }),
              Animated.timing(this.animation, {
                toValue: 1,
                duration: 300
              })
            ]).start();
          });
        }
      );
    });
  };

  public closeImage = () => {
    Animated.parallel([
      Animated.timing(this.position.x, {
        toValue: this.oldPosition.x,
        duration: 300
      }),
      Animated.timing(this.position.y, {
        toValue: this.oldPosition.y,
        duration: 250
      }),
      Animated.timing(this.dimensions.x, {
        toValue: this.oldPosition.width,
        duration: 250
      }),
      Animated.timing(this.dimensions.y, {
        toValue: this.oldPosition.height,
        duration: 250
      }),
      Animated.timing(this.animation, {
        toValue: 0,
        duration: 250
      })
    ]).start(() => {
      this.setState({
        activeImage: null
      });
    });
  };
  public render() {
    const activeImageStyle = {
      width: this.dimensions.x,
      height: this.dimensions.y,
      left: this.position.x - 2,
      top: this.position.y - 2
    };

    const animatedContentY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0]
    });

    const animatedContentOpacity = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    const animatedContentStyle = {
      opacity: animatedContentOpacity,
      transform: [
        {
          translateY: animatedContentY
        }
      ]
    };

    const animatedCrossOpacity = {
      opacity: this.animation
    };
    return (
      <View style={{ flex: 1, position: "relative" }}>
        <ScrollView style={{ flex: 1 }}>
          {images.map((image, index) => {
            return (
              <TouchableWithoutFeedback
                key={image.id}
                onPress={() => this.openImage(index)}
              >
                <Animated.View
                  style={{
                    height: SCREEN_HEIGHT - 150,
                    width: SCREEN_WIDTH,
                    padding: 15
                  }}
                >
                  <Image
                    ref={img => (this.allImages[index] = img)}
                    source={image.src}
                    style={{
                      flex: 1,
                      resizeMode: "cover",
                      borderRadius: 20,
                      height: null,
                      width: null
                    }}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
        <View
          style={StyleSheet.absoluteFillObject}
          pointerEvents={this.state.activeImage ? "auto" : "none"}
        >
          <View
            style={{ flex: 2, zIndex: 1001 }}
            ref={view => (this.viewImage = view)}
          >
            <Animated.Image
              source={
                this.state.activeImage ? this.state.activeImage.src : null
              }
              style={[
                {
                  flex: 1,
                  resizeMode: "cover",
                  top: 0,
                  left: 0
                },
                activeImageStyle
              ]}
            />
            <TouchableWithoutFeedback onPress={() => this.closeImage()}>
              <Animated.View
                style={[
                  { position: "absolute", top: 30, right: 30 },
                  animatedCrossOpacity
                ]}
              >
                <Text
                  style={{ fontSize: 24, fontWeight: "bold", color: "white" }}
                >
                  X
                </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                backgroundColor: "white",
                padding: 20,
                paddingTop: 150,
                zIndex: 1000
              },
              animatedContentStyle
            ]}
          >
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae deserunt similique obcaecati aliquid? Minima suscipit
              voluptate rem porro aperiam veritatis reiciendis voluptatem
              doloribus, dolor at blanditiis vitae maxime inventore consequatur?
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

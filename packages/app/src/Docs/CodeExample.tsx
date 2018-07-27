import * as React from "react";
import { View } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { atelierLakesideDark } from "react-syntax-highlighter/styles/hljs";

export class CodeExample extends React.Component<any> {
  public render() {
    return (
      <SyntaxHighlighter
        language="typescript"
        style={atelierLakesideDark}
        highlighter={"hljs"}
      >
        {this.props.code}
      </SyntaxHighlighter>
    );
  }
}

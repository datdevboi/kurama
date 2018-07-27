export const componentData = [ { name: 'Button',
    data: 
     { description: '',
       displayName: 'Button',
       props: 
        { onPress: 
           { defaultValue: null,
             description: 'function when Button is pressed',
             name: 'onPress',
             required: false,
             type: { name: '() => void' } },
          type: 
           { defaultValue: { value: 'Primary' },
             description: 'The type of Button',
             name: 'type',
             required: false,
             type: 
              { name: '"Primary" | "Info" | "Success" | "Danger" | "Warning" | "Dark" | "Light"' } },
          full: 
           { defaultValue: null,
             description: 'Should button be full, taking all of the space of its container',
             name: 'full',
             required: false,
             type: { name: 'boolean' } },
          activeOpacity: 
           { defaultValue: { value: '0.5' },
             description: 'the opacity of the button once pressed',
             name: 'activeOpacity',
             required: false,
             type: { name: 'number' } },
          style: 
           { defaultValue: null,
             description: 'Any styles that you want to apply to the button',
             name: 'style',
             required: false,
             type: { name: 'ViewStyle' } },
          size: 
           { defaultValue: { value: 'medium' },
             description: '',
             name: 'size',
             required: false,
             type: { name: '"small" | "medium" | "large"' } } } },
    examples: 
     [ { name: 'Small',
         code: 'import * as React from "react";\nimport { Text, View } from "react-native";\nimport { Button } from "../../components/Button/Button";\n\nexport class SmallButton extends React.Component<any> {\n  public static displayName = "Small";\n  public render() {\n    return (\n      <View>\n        <Button\n          size="small"\n          type="Primary"\n          onPress={() => console.log("pressed")}\n        >\n          <Text style={{ color: "white" }}>Primary</Text>\n        </Button>\n        <Button size="small" type="Info" onPress={() => console.log("pressed")}>\n          <Text style={{ color: "white" }}>Info</Text>\n        </Button>\n        <Button\n          size="small"\n          type="Success"\n          onPress={() => console.log("pressed")}\n        >\n          <Text style={{ color: "white" }}>Success</Text>\n        </Button>\n        <Button\n          size="small"\n          type="Danger"\n          onPress={() => console.log("pressed")}\n        >\n          <Text style={{ color: "white" }}>Danger</Text>\n        </Button>\n        <Button size="small" type="Dark" onPress={() => console.log("pressed")}>\n          <Text style={{ color: "white" }}>Dark</Text>\n        </Button>\n        <Button\n          size="small"\n          type="Warning"\n          onPress={() => console.log("pressed")}\n        >\n          <Text style={{ color: "white" }}>Warning</Text>\n        </Button>\n        <Button\n          size="small"\n          onPress={() => console.log("pressed")}\n          style={{ backgroundColor: "#db7093" }}\n        >\n          <Text style={{ color: "white" }}>Custom</Text>\n        </Button>\n      </View>\n    );\n  }\n}\n' } ] },
  { name: 'Card',
    data: { description: '', displayName: 'Card', props: {} },
    examples: [] },
  { name: 'Deck',
    data: { description: '', displayName: 'Deck', props: {} },
    examples: [] } ]
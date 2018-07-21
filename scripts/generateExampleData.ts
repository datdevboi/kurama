import fs from "fs";
import path from "path";
import chalk from "chalk";
import * as reactdcts from "react-docgen-typescript";
import util from "util";
import { componentData } from "../config/componentData";
import { writeFile } from "./generateComponentData";

const parse = reactdcts.parse;

const componentNames = componentData.map((data: any) => data.displayName);

const paths = {
  components: path.join(__dirname, "../src", "components"),
  examples: path.join(__dirname, "../src", "examples"),
  output: path.join(__dirname, "../config", "examplesData.ts")
};

function readFile(filePath: string) {
  return fs.readFileSync(filePath, "utf-8");
}
function getFiles(filepath: string) {
  return fs.readdirSync(filepath).filter(file => {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

function getExampleFiles(examplesPath: any, componentName: any) {
  let exampleFiles: any = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}

function getExampleData(examplesPath: string, componentName: string) {
  const examples = getExampleFiles(examplesPath, componentName);
  return examples.map((file: string) => {
    const filePath = path.join(examplesPath, componentName, file);
    const content = readFile(filePath);
    const info = parse(content);
    return {
      // // By convention, component name should match the filename.
      // // So remove the .js extension to get the component name.
      // name: file.slice(0, -3),
      // description: info.description,
      code: content
    };
  });
}

const exampleData = componentNames.map((name: string) => {
  return getExampleData(paths.examples, name);
});

writeFile(
  paths.output,
  "export const examplesData = " + util.inspect(exampleData, { depth: null })
);

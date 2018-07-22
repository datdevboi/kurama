import fs from "fs";
import path from "path";
import chalk from "chalk";
import * as reactdcts from "react-docgen-typescript";
import util from "util";

const parse = reactdcts.parse;

const paths = {
  components: path.join(__dirname, "../src", "components"),
  examples: path.join(__dirname, "../src", "examples"),
  output: path.join(__dirname, "../config", "componentData.ts")
};

function getDirectories(filepath: string) {
  return fs.readdirSync(filepath).filter(file => {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

export function writeFile(filepath: string, content: any) {
  fs.writeFile(filepath, content, err => {
    err
      ? // tslint:disable-next-line:no-console
        console.log(chalk.red(err as any))
      : // tslint:disable-next-line:no-console
        console.log(chalk.green("Component data saved."));
  });
}
function generate(paths: any) {
  const componentData = getDirectories(paths.components).map(fileName => {
    const data = parse(
      path.join(__dirname, `../src/components/${fileName}/${fileName}.tsx`)
    );

    return {
      name: fileName,
      data: data[0],
      examples: getExampleData(paths.examples, fileName)
    };
  });

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
      const info = parse(filePath);
      return {
        // // By convention, component name should match the filename.
        // // So remove the .js extension to get the component name.
        // name: file.slice(0, -3),
        // description: info.description,
        name: info[0].displayName,

        code: content
      };
    });
  }

  writeFile(
    paths.output,
    "export const componentData = " +
      util.inspect(componentData, { depth: null })
  );
}

generate(paths);

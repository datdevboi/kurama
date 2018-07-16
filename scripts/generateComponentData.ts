import fs from "fs";
import path from "path";
import chalk from "chalk";
import * as reactdcts from "react-docgen-typescript";
import util from "util";

const parse = reactdcts.parse;

const paths = {
  components: path.join(__dirname, "../src", "components"),
  output: path.join(__dirname, "../config", "componentData.ts")
};

function getDirectories(filepath: string) {
  return fs.readdirSync(filepath).filter(file => {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function readFile(filePath: string) {
  return fs.readFileSync(filePath, "utf-8");
}

function writeFile(filepath: string, content: any) {
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

    return data[0];
  });

  writeFile(
    paths.output,
    "export const componentData = " +
      util.inspect(componentData, { depth: null })
  );
}

generate(paths);

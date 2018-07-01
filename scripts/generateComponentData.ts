import fs from "fs";
import path from "path";
import chalk from "chalk";
// import chokidar from "chokidar";
import * as reactdcts from "react-docgen-typescript";
import util from "util";

const parse = reactdcts.parse;

const paths = {
  components: path.join(__dirname, "../src", "components"),
  output: path.join(__dirname, "../config", "componentData.ts")
};

// const enableWatchMode = process.argv.slice(2) == '--watch';
// if (enableWatchMode) {
//   // Regenerate component metadata when components or examples change.
//   chokidar.watch([paths.examples, paths.components]).on('change', function(event, path) {
//     generate(paths);
//   });
// } else {
//   // Generate component metadata
//   generate(paths);
// }

// function generate(paths) {
//   var errors = [];
//   var componentData = getDirectories(paths.components).map(function(componentName) {
//     try {
//       return getComponentData(paths, componentName);
//     } catch(error) {
//       errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
//     }
//   });
//   writeFile(paths.output, "module.exports = /* eslint-disable */ " + JSON.stringify(errors.length ? errors : componentData));
// }

function getDirectories(filepath: string) {
  return fs.readdirSync(filepath).filter(file => {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function readFile(filePath: string) {
  return fs.readFileSync(filePath, "utf-8");
}

const componentData = getDirectories(paths.components).map(fileName => {
  const data = parse(
    path.join(__dirname, `../src/components/${fileName}/${fileName}.tsx`)
  );

  return data[0];
});

function writeFile(filepath: string, content: any) {
  fs.writeFile(filepath, content, err => {
    err
      ? console.log(chalk.red(err as any))
      : console.log(chalk.green("Component data saved."));
  });
}

writeFile(
  paths.output,
  "export const componentData = " + util.inspect(componentData, { depth: null })
);

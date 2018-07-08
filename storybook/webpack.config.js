const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
module.exports = (baseConfig, env, defaultconfig) => {

  if(defaultconfig.module.rules) {
    defaultconfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  defaultconfig.plugins.push(new TSDocgenPlugin()); // optional
  // defaultconfig.resolve.extensions.push(".ts", ".tsx");
  }
  
  return defaultconfig;
};
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const productionConfig = require("./webpack.prod");
const develepmentConfig = require("./webpack.dev");

module.exports = (env) => {
  return env.production ?
  merge(commonConfig, productionConfig(env)) :
  env.development ?
  merge(commonConfig, develepmentConfig) :
  new Error("no matching configuration was found");
}
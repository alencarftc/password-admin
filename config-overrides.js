const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = function(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@components": resolve("src/shared/components"),
    "@configs": resolve("src/shared/configs"),
    "@layouts": resolve("src/shared/layouts"),
    "@utils": resolve("src/shared/utils"),
    "@pages": resolve("src/pages"),
    "@images": resolve("src/assets/images"),
    "@sass": resolve("src/assets/sass"),
    "@files": resolve("src/assets/files")
  });

  return config;
};
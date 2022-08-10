const path = require("path");
const baseConfig = require("../.eslintrc");

module.exports = {
  ...baseConfig,
  extends: [...baseConfig.extends],
  settings: {
    ...baseConfig.settings,
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: [path.resolve(__dirname, "tsconfig.json")],
      },
    },
  },
};

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  settings: {
    react: {
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    }
  },
  env: {
    browser: true,
    node: true
  }
};

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "import/prefer-default-export": 0,
    "no-unsafe-optional-chaining": 0,
    "new-cap": 0,
    "react/no-array-index-key": 0,
    "no-shadow": 0,
    "react/jsx-no-constructed-context-values": 0,
    camelcase: 0,
    "import/order": 0,
    "import/no-named-default": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "react/require-default-props": 0,
    "@next/next/no-document-import-in-page": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/quotes": [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "import/no-extraneous-dependencies": 0,
    "func-names": 0,
    "react/jsx-pascal-case": 0,
    "@typescript-eslint/naming-convention": 0,
    "import/extensions": 0,
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
  },
};

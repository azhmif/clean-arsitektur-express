module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};

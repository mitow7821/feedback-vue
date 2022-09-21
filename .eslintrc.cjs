module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {},
};

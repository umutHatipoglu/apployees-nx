module.exports = {
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html"],
  coverageDirectory: "../../../coverage/libs/examples/library2",
  globals: { "ts-jest": { tsConfig: "<rootDir>/tsconfig.spec.json" } },
  displayName: "examples-library2",
};

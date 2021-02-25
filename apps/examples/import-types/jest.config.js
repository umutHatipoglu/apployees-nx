/*******************************************************************************
 * © Apployees Inc., 2019
 * All Rights Reserved.
 ******************************************************************************/
module.exports = {
  preset: "../../../jest.preset.js",
  coverageDirectory: "../../../coverage/apps/examples/import-types",
  globals: { "ts-jest": { tsConfig: "<rootDir>/tsconfig.spec.json" } },
  displayName: "examples-import-types",
};

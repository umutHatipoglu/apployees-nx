/*******************************************************************************
 * © Apployees Inc., 2019
 * All Rights Reserved.
 ******************************************************************************/
module.exports = {
  preset: "../../../jest.preset.js",
  coverageDirectory: "../../../coverage/apps/examples/webserver",
  globals: { "ts-jest": { tsConfig: "<rootDir>/tsconfig.spec.json" } },
  displayName: "examples-webserver",
};

/*******************************************************************************
 * © Apployees Inc., 2019
 * All Rights Reserved.
 ******************************************************************************/
module.exports = {
  preset: "../../jest.preset.js",
  coverageDirectory: "../../coverage/apps/webserver",
  globals: { "ts-jest": { tsConfig: "<rootDir>/tsconfig.spec.json" } },
  displayName: "webserver",
};

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  testEnvironment: "jest-environment-jsdom",

  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/index.tsx",
    "!next.config.js",
    "!next-env.d.ts",
    "!src/styles/styled.d.ts",
    "!src/pages/_app.tsx",
    "!src/pages/_document.tsx",
    "!src/styles/GlobalStyles.tsx",
  ],
};

module.exports = createJestConfig(customJestConfig);

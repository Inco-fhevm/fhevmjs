module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
    '^.+\\.jsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
    '^.+\\.bin$': ['<rootDir>config/rawLoader.js'],
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', 'src/**/*.tsx', '!src/**/*.story.**'],
  testRegex: '\\.test\\.tsx?$',
  coverageReporters: ['lcov', 'text-summary', 'json'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    tfhe: 'node-tfhe',
  },
  coveragePathIgnorePatterns: [],
};

module.exports = {
  moduleFileExtensions: ["js", "json"],
  transform: {
      '^.+\\.js?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
  },
  testMatch: [
      '<rootDir>/src/test/*.test.js',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
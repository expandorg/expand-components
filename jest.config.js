module.exports = {
  setupFiles: ['<rootDir>/scripts/jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!(@gemsorg)/).*/'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+(\\.module){0,1}\\.styl': '<rootDir>/scripts/styleMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/'],
};

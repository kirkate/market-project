export default {
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\.(css|svg)$': '<rootDir>/jest-mock-transform.ts',
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/{main,main.es5}.ts'],
  coverageThreshold: {
    // for production-ready application thresholds must be greater than 80
    global: {
      lines: 0,
      branches: 0,
      functions: 0,
      statements: 0,
    },
  },
};

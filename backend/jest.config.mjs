export default {
  clearMocks: true,
  testEnvironment: 'node',
  transform: {
    '\.ts$': 'ts-jest'
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/app.ts'],
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

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
};

export default config;

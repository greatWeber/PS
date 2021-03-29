module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper:{
    "\\.(s?css|less)$": "identity-obj-proxy"
  }
};
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // to remove console from production build...
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // Add jsxImportSource so className compiles correctly
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-worklets/plugin", // replaces old 'react-native-reanimated/plugin'
    ],
  };
};

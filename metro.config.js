/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        assetPlugins: ['expo-asset/tools/hashAssetFiles'],
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

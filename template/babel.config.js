module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/ui/components',
          '@imports': './imports',
          '@contexts': ['./src/ui/contexts'],
          '@hooks': ['./src/ui/hooks'],
          '@modules': ['./src/modules'],
          '@config': ['./src/config'],
        },
      },
    ],
  ],
};

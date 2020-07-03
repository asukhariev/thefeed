module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js'],
        alias: {
          root: './',
          app: './src/App/',
          assets: './src/assets/',
          store: './src/store/',
          routes: './src/app/Routes/',
          screens: './src/screens/',
          components: './src/components/',
          'shared-components': './src/shared-components/',
          utils: './src/utils/',
          api: './src/api/',
          dataFile: './src/data/',
        },
      },
    ],
  ],
};

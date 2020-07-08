module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'styled-components',
      [
        'module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  };
};


module.exports = (storybookBaseConfig, configType) => {
  const dev = configType === 'DEVELOPMENT';
  storybookBaseConfig.module.rules.push({
    test: /^((?!\.module).)*\.styl$/,
    use: [
      'style-loader',
      'css-loader?sourceMap&importLoaders=2',
      'postcss-loader?sourceMap',
      'stylus-loader?paths[]=src',
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.module\.styl$/,
    use: [
      'style-loader',
      `css-loader?sourceMap&importLoaders=2&modules&localIdentName=${dev ? '[local]__[path][name]__' : ''}[hash:base64:5]`,
      'postcss-loader?sourceMap',
      'stylus-loader?paths[]=src',
    ],
    exclude: /node_modules/,
  })

  return storybookBaseConfig;
};

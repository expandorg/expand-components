
module.exports = (storybookBaseConfig, configType) => {
  const dev = configType === 'DEVELOPMENT';
  const jsRules = storybookBaseConfig.module.rules[0]
  jsRules.exclude = /node_modules\/(?!(@gemsorg)\/).*/;
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2,
        },
      },
      'postcss-loader?sourceMap'
    ]
  },{
    test: /^((?!\.module).)*\.styl$/,
    use: [
      'style-loader',
      {
        loader:  'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2,
        },
      },
      'postcss-loader?sourceMap',
      'stylus-loader?paths[]=src',
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.module\.styl$/,
    use: [
      'style-loader',
      {
        loader: `css-loader`,
        options: {
          sourceMap: true,
          importLoaders: 2,
          modules: true,
          localIdentName: `${dev ? '[local]__[path][name]__' : ''}[hash:base64:5]`
        },
      },
      'postcss-loader?sourceMap',
      'stylus-loader?paths[]=src',
    ],
    exclude: /node_modules/,
  })

  return storybookBaseConfig;
};

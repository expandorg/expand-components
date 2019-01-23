export default {
  title: 'Expand Ui',
  description: 'Expand components and modules',
  theme: 'docz-theme-default',

  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/dracula.css',
        },
      ],
    },
  },
  themeConfig: {
    codemirrorTheme: 'dracula',
    colors: {
      primary: '#F9005F',
      sidebarBg: 'white',
    },
  },
  modifyBundlerConfig: config => {
    const jsRules = config.module.rules[0];
    jsRules.exclude = /node_modules\/(?!(@expandorg)\/).*/;
    config.module.rules.push(
      {
        test: /^((?!\.module).)*\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
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
              localIdentName: `[local]__[path][name]__[hash:base64:5]`,
            },
          },
          'postcss-loader?sourceMap',
          'stylus-loader?paths[]=src',
        ],
        exclude: /node_modules/,
      }
    );
    return config;
  },
};

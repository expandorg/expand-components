export default {
  title: 'Expand Ui',
  description: 'Expand components and modules',
  theme: 'docz-theme-default',
  hashRouter: true,
  dest: 'docs',
  base: '/expand-components/',
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/dracula.css',
        },
      ],
      raw: `
        <style>
          html {
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
          }
          html,
          body {
            font-family: 'Poppins';
            margin: 0;
          }
          * {
            box-sizing: initial;
            border: 0;
            margin: 0;
            padding: 0;
          }
          .gem-docz-relative {
            position: relative;
          }
        </style>
      `,
    },
  },
  themeConfig: {
    codemirrorTheme: 'dracula',
    colors: {
      primary: '#1471EB',
      sidebarBg: '#1C2541',
      sidebarText: '#F3F9FF',
      sidebarBorder: 'transparent',
    },
    styles: {
      html: {
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: 'Avenir',
      },
      playground: {
        padding: ['20px', '5px'],
      },
      // container: {
      //   width: ['100%', '100%', 920],
      //   padding: ['20px', '0 40px 40px'],
      // },
    },
  },
  modifyBundlerConfig: (config) => {
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
              modules: {
                localIdentName: '[local]__[path][name]__[hash:base64:5]',
              },
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

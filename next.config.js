const path = require('path');
const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
  require.extensions[".css"] = (file) => {};
}
function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'Removing `minimize` option from `css-loader` entries in Webpack config',
  );
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withSass(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      'primary-color': '#F87679'
    },
  },
  webpack: (config, { isServer }) => {
    /* Hack to prevent error "options has an unknown property 'minimize'" */
    HACK_removeMinimizeOptionFromCssLoaders(config);
    /* Adding alias to components and containers folders */
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['containers'] = path.join(__dirname, 'containers');

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: [{
          loader: 'url-loader',
          options: {
              limit: 100000
          },
        }]
    });
    return config
  },
}))
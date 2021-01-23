// require("dotenv").config();
// const path = require("path");
// const fs = require("fs");
// const lessToJs = require("less-vars-to-js");
// const withLess = require("@zeit/next-less");
// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
// const withPlugins = require("next-compose-plugins");

// if (typeof require !== "undefined") {
//   require.extensions[".less"] = () => {};
//   require.extensions[".css"] = (file) => {};
// }
// function HACK_removeMinimizeOptionFromCssLoaders(config) {
//   console.warn(
//     "Removing `minimize` option from `css-loader` entries in Webpack config"
//   );
//   config.module.rules.forEach((rule) => {
//     if (Array.isArray(rule.use)) {
//       rule.use.forEach((u) => {
//         if (u.loader === "css-loader" && u.options) {
//           delete u.options.minimize;
//         }
//       });
//     }
//   });
// }

// const themeVariables = lessToJs(
//   fs.readFileSync(
//     path.resolve(__dirname, "./style/general/custom-antd.less"),
//     "utf-8"
//   )
// );

// const nextConfig = {};

// const plugins = [
//   withCSS,
//   withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//       modifyVars: themeVariables,
//     },
//     webpack: (config, { isServer }) => {
//       if (isServer) {
//         /* Hack to prevent error "options has an unknown property 'minimize'" */
//         HACK_removeMinimizeOptionFromCssLoaders(config);
//         /* Adding alias to components and containers folders */
//         config.resolve.alias["components"] = path.join(__dirname, "components");
//         config.resolve.alias["containers"] = path.join(__dirname, "containers");

//         const antStyles = /antd\/.*?\/antd.*?/;
//         const origExternals = [...config.externals];
//         config.externals = [
//           (context, request, callback) => {
//             if (request.match(antStyles)) return callback;
//             if (typeof origExternals[0] === "function") {
//               origExternals[0](context, request, callback);
//             } else callback();
//           },
//           ...(typeof origExternals[0] === "function" ? [] : origExternals),
//         ];

//         config.module.rules.unshift(
//           // {
//           //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//           //   use: [
//           //     {
//           //       loader: "url-loader",
//           //       options: {
//           //         limit: 100000,
//           //       },
//           //     },
//           //   ],
//           // },
//           // {
//           //   test: /\.css$/,
//           //   use: ["style-loader", "css-loader"],
//           // },
//           {
//             test: antStyles,
//             use: ["null-loader"],
//           }
//         );
//       }
//       return config;
//     },
//   }),
//   withSass,
// ];

// // module.exports = withCSS(
// //   withSass(
// //     withLess({
// //       lessLoaderOptions: {
// //         javascriptEnabled: true,
// //         modifyVars: {
// //           "primary-color": "#F87679",
// //         },
// //       },
// //       webpack: (config, { isServer }) => {
// //         /* Hack to prevent error "options has an unknown property 'minimize'" */
// //         HACK_removeMinimizeOptionFromCssLoaders(config);
// //         /* Adding alias to components and containers folders */
// //         config.resolve.alias["components"] = path.join(__dirname, "components");
// //         config.resolve.alias["containers"] = path.join(__dirname, "containers");

// //         config.module.rules.push({
// //           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
// //           use: [
// //             {
// //               loader: "url-loader",
// //               options: {
// //                 limit: 100000,
// //               },
// //             },
// //           ],
// //         });
// //         return config;
// //       },
// //     })
// //   )
// // );

// module.exports = withPlugins(plugins, nextConfig);

// const withLess = require("@zeit/next-less");
// const withCSS = require("@zeit/next-css");
// const lessToJS = require("less-vars-to-js");
// const fs = require("fs");
// const path = require("path");

// // Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, "./style/custom-antd.less"), "utf8")
// );

// module.exports = withLess({
//   sassOptions: {
//     includePaths: [path.join(__dirname, "style")],
//   },
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//     modifyVars: themeVariables, // make your antd custom effective
//     importLoaders: 0,
//   },
//   cssLoaderOptions: {
//     importLoaders: 3,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   webpack: (config, { isServer }) => {
//     //Make Ant styles work with less
//     if (isServer) {
//       const antStyles = /antd\/.*?\/style.*?/;
//       const origExternals = [...config.externals];
//       config.externals = [
//         (context, request, callback) => {
//           if (request.match(antStyles)) return callback();
//           if (typeof origExternals[0] === "function") {
//             origExternals[0](context, request, callback);
//           } else {
//             callback();
//           }
//         },
//         ...(typeof origExternals[0] === "function" ? [] : origExternals),
//       ];

//       config.module.rules.unshift(
//         {
//           test: antStyles,
//           use: "null-loader",
//         },
//         {
//           test: /\.css$/,
//           use: ["style-loader", "css-loader"],
//         }
//         // {
//         //   test: /\.scss$/,
//         //   use: ["style-loader", "css-loader", "sass-loader"],
//         //   include: path.resolve(__dirname, "../"),
//         // }
//       );
//     }
//     return config;
//   },
// });
const withLess = require("@zeit/next-less");
const lessToJS = require("less-vars-to-js");
const withPlugins = require("next-compose-plugins");

const fs = require("fs");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config();

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./style/custom-antd.less"), "utf8")
);

const plugins = [
  [
    withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style.*?/;
          const origExternals = [...config.externals];
          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles)) return callback();
              if (typeof origExternals[0] === "function") {
                origExternals[0](context, request, callback);
              } else {
                callback();
              }
            },
            ...(typeof origExternals[0] === "function" ? [] : origExternals),
          ];

          config.module.rules.unshift({
            test: antStyles,
            use: "null-loader",
          });
        }

        const builtInLoader = config.module.rules.find((rule) => {
          if (rule.oneOf) {
            return (
              rule.oneOf.find((deepRule) => {
                return (
                  deepRule.test && deepRule.test.toString().includes("/a^/")
                );
              }) !== undefined
            );
          }
          return false;
        });

        if (typeof builtInLoader !== "undefined") {
          config.module.rules.push({
            oneOf: [
              ...builtInLoader.oneOf.filter((rule) => {
                return (
                  (rule.test && rule.test.toString().includes("/a^/")) !== true
                );
              }),
            ],
          });
        }

        config.resolve.alias["@"] = path.resolve(__dirname);
        return config;
      },
    }),
  ],
];

const nextConfig = {
  env: {},
};

module.exports = withPlugins(plugins, nextConfig);

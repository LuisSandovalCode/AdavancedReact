const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const path = require("path");
const WorkBoxWebpackPlugin = require("workbox-webpack-plugin");
module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html"
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu App de fotos de mascotas',
      short_name: "Petgram",
      description: "Con Petgram puede encontrar fotos de animales domesticos",
      background_color: '#fff',
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes:[96,128,192,256,384,512]
        }
      ]
    }),
    new WorkBoxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options:{
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petserver-luis-i1b7nx12f.now.sh'),
          handler: 'NetworkFirst',
          options:{
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-syntax-dynamic-import"],
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};

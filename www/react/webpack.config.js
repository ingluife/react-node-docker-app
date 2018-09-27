/*
 ./webpack.config.js
*/
const path = require('path'); // path utility
const HtmlWebpackPlugin = require('html-webpack-plugin');
// init HTML Webpack Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html', // archivo de nuestra vista
  inject: 'body' // donde insertaremos nuestro script
})
const config = {
  mode: "development",
  entry: './app/dist/index.js', // archivo js que codearemos
  output: {
    path: path.resolve('./app'), //resolver el path de salida
    filename: 'index.min.js' // archivo js compilado
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ["@babel/env", "@babel/preset-react"],
            plugins: ["react-html-attrs", "transform-class-properties"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [HtmlWebpackPluginConfig] // configuración de nuestra vista
}

module.exports = config; //exportamos a webpack nuestra configuración
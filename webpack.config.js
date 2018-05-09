const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./app/index.js", // входная точка - исходный файл
  output: {
    path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
    publicPath: '/public/',
    filename: "[name].js"       // название создаваемого файла
  },
  devtool: NODE_ENV === 'dev' ? 'source-map' : '',
  module: {
    rules: [   //загрузчик для jsx
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        use: {
          loader: "babel-loader",   // определяем загрузчик
          options: {
            presets: ["es2015", "env", "react", "stage-3"]    // используемые плагины
          }
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader!less-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin("index.css")
  ]
};

if (NODE_ENV === 'prod') {
  module.exports.plugins.push(
      new UglifyJsPlugin()
  )
}
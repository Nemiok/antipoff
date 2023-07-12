process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");

let config = {
  context: path.join(__dirname, 'src'), // Директория с исходным кодом приложения
  entry: 'main.tsx', // Главный файл приложения
  output: {
    path: path.join(__dirname, 'build'), // Куда делать оброку
    filename: '[name].js', // Шаблон для названия файлов
    clean: true, // Очистить ./build перед сборкой
  },
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // расширения по умолчанию если не указаны в import
    modules: ['./', 'node_modules'], // Где искать файлы подключаемых модулей (пакетов)
    alias: {
      react: path.resolve(__dirname, 'node_modules/react') // устраняет неожиданные ошибки вебпака
    },
  },
  module: {
    rules: [
      // Транспиляция JS/TSX/TS
      {
        test: /\.tsx?$|\.ts?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.tsx?$|\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      // Правила обработки подключаемых файлов
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          { loader: 'css-loader', options: { url: true, import: true } },
        ]
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|mp3|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
      {
        test: /\.png?$|\.jpg?$|\.jpeg?$|\.svg$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },

              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              },
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(), // Плагин для вытаскивания собранных стилей в отдельный файл
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html',
      base: '/',
    }),
  ],

  optimization: {
    minimizer: [
      '...',
    ]
  }

}

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
  config.devServer = {
    static: path.join(__dirname, 'build'),
    port: 8010,
    historyApiFallback: true,
  };
}

module.exports = config;

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';

export default {
  mode: 'development',
  entry: {
    home: './src/pages/home/index.ts',
    about: './src/pages/about/index.ts'
  },
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.js'],
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  },
  devServer: {
    port: 9000,
    index: 'home.html'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "__VUE_OPTIONS_API__": true,
      "__VUE_PROD_DEVTOOLS__": false
    }),
    new HtmlWebpackPlugin({
      title: 'home',
      template: './src/pages/home/index.html',
      filename: 'home.html'
    }),
    new HtmlWebpackPlugin({
      title: 'about',
      template: './src/pages/about/index.html',
      filename: 'about.html'
    })
  ]
}

import { join } from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import webpack, {Configuration} from 'webpack';
import {generatePageList} from "./utils";

export default {
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
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "__VUE_OPTIONS_API__": true,
      "__VUE_PROD_DEVTOOLS__": false
    }),
    ...generatePageList()
  ]
} as Configuration;

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import {Configuration} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' } // dist/public
      ]
    })
  ]
} as Configuration;

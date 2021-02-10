import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import {Configuration} from "webpack";
import CopyPlugin from 'copy-webpack-plugin';

export default {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public',  to: 'public' }
      ]
    })
  ]
} as Configuration;

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import {Configuration} from "webpack";

export default {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
} as Configuration;

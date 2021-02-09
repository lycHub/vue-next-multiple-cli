import {Configuration} from "webpack";

export default {
  mode: 'development',
  devServer: {
    port: 9000,
    index: 'home.html'
  }
} as Configuration;

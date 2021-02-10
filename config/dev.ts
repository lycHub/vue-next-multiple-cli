import {Configuration} from "webpack";

export default {
  mode: 'development',
  devServer: {
    port: 8000,
    index: 'home.html'
  }
} as Configuration;

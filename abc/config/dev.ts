import {Configuration} from "webpack";

export default {
  mode: 'development',
  devServer: {
    open: {{open}},
    port: 8000,
    index: 'home.html'
  }
} as Configuration;

import {merge} from "webpack-merge";
import base from "./base";
import prod from "./prod";
import dev from "./dev";
import {Configuration} from "webpack";

export default (env: Record<string, boolean | string | number>): Configuration => {
  const isProd = env.production === true;
  if (isProd) {
    return merge(base, prod);
  }
  return merge(base, dev);
}

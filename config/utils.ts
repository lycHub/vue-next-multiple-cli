import HtmlWebpackPlugin from "html-webpack-plugin";
import { glob } from 'glob';

export function generatePageList(): HtmlWebpackPlugin[] {
  try {
    const files = glob.sync('src/pages/*');
    // console.log('files', files);
    if (files.length) {
      return files.map(item => {
        const name = item.split('/').pop();
        return new HtmlWebpackPlugin({
          title: name,
          template: `./${item}/index.html`,
          filename: name + '.html',
          chunks: [name!]
        })
      })
    }
    return [];
  } catch (error) {
    throw error;
  }
}

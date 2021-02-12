import template from "art-template";
import {join} from "path";
import {outputFileSync} from "fs-extra";
import chalk from "chalk";

export default function (name: string) {
  let basePath = 'directives';
  let trueName = name;
  const data = name.split('/');
  if (data.length > 1) {
    trueName = data.pop()!;
    basePath = data.join('/');
  }
  try {
    const content = template(
      join(__dirname, '../../templates', 'directive.ts'),
      { name: trueName }
    );
    const dest = `src/${basePath}/${trueName}.ts`;
    outputFileSync(dest, content);
    console.log(chalk.green('创建成功>>', dest));
  } catch (e) {
    console.log(chalk.red('创建失败'));
    throw e;
  }
}

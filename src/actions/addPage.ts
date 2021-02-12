import template from "art-template";
import {join} from "path";
import {outputFileSync, readdirSync} from "fs-extra";
import chalk from "chalk";
import inquirer from "inquirer";
import {pageTypeQues} from "../inquirers";

export default async function (name: string) {
  try {
    const { pageType } = await inquirer.prompt([pageTypeQues]);
    const tplPath = join(__dirname, '../../templates/page', pageType);
    const files = readdirSync(tplPath);
    // console.log('files', files);
    files.forEach(file => {
      const content = template(tplPath + '/' + file, { name });
      const dest = `src/pages/${name}/${file}`;
      outputFileSync(dest, content);
    });
    console.log(chalk.green('创建成功>>', pageType));
  } catch (e) {
    console.log(chalk.red('创建失败'));
    throw e;
  }
}

import ora from "ora";
import chalk from "chalk";
import {promisify} from "util";
import download from "download-git-repo";
import {exec, hasYarn, recursiveDir} from "../utils";
import { partition } from "lodash";
import template from 'art-template';
import inquirer from 'inquirer';
import {unlinkSync, writeFileSync} from "fs";

interface CreateOptions {
  tool: 'webpack' | 'gulp',
  install: boolean;
  pkgTool: 'npm' | 'yarn';
}

const downloadTemplate = promisify<string, string, { clone: boolean; }>(download);

const rule = template.defaults.rules[0];
rule.test = new RegExp(rule.test.source.replace('<%', '<\\\?').replace('%>', '\\\?>'));

export default async function (projectName: string, options: CreateOptions) {
  const spinner = ora(chalk.blue('初始化模版...')).start();
  try {
  //   await downloadTemplate(
  // 'direct:https://github.com/lycHub/vue-next-mutiple-template.git#' + options.tool,
  //       projectName,
  //       { clone: true }
  //   );
    const allFiles = recursiveDir(projectName);
    // console.log('allFiles', allFiles);
    if (allFiles.length) {
      partition(allFiles, 'isDir')[1].forEach(item => {
        if (!item.file.includes('assets')) {
          const content = template(process.cwd() + '/' + item.file, { projectName });
          let dest = item.file;
          if (dest.includes('.art')) {
            unlinkSync(dest);
            dest = dest.replace(/\.art/, '');
          }
          writeFileSync(dest, content);
        }
      });
      spinner.info('模版初始化成功');
      if (options.install) {
        installPkg(options.pkgTool, './' + projectName);
      } else {

      }
    }
  } catch (error) {
    spinner.fail('项目创建失败');
    throw error;
  }
}



async function installPkg(pkgTool: 'npm' | 'yarn', cwd: string) {
  let tool = pkgTool;
  if (!tool) {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'pkgTool',
        choices: ['npm', 'yarn'],
        default: 'npm',
        message: 'npm or yarn'
      }
    ]);
    tool = answers.pkgTool;
  }
  if (tool === 'yarn' && !hasYarn()) {
    console.log(chalk.red('请先安装yarn'));
  } else {
    const spinner = ora(chalk.blue('正在安装依赖...')).start();
    await exec(tool + ' install', { cwd });
    spinner.succeed(chalk.green('项目创建成功'));
  }
}

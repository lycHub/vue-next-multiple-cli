import ora from "ora";
import chalk from "chalk";

interface CreateOptions {
  tool: 'webpack' | 'gulp',
  install: boolean;
  pkgTool: 'npm' | 'yarn';
}

export default function (projectName: string, options: CreateOptions) {
  console.log('projectName', projectName);
  console.log('options', options);
  const spinner = ora(chalk.blue('初始化模版...')).start();
  setTimeout(() => {
    spinner.text = '正在下载...';
  }, 2000);
  setTimeout(() => {
    spinner.succeed(chalk.green('模版初始化成功.'));
  }, 5000);
}

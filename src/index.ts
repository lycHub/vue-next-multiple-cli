import { Command } from 'commander';
import create from "./actions/create";

const program = new Command('vmc');
program
  .usage('create <projectName> [options]')
  .command('create <projectName>')
  .description('创建项目')
  .option('-t --tool [value]', '选择构建工具：webpack|gulp', 'webpack')
  .option('-i --install', '是否自动安装依赖', false)
  .option('-pt --pkg-tool [value]', 'npm or yarn?')
  .action(create);

program.addHelpText('after', `
  Example create a project:
    $ vmc create helloWorld
`);

program.version(require('../package.json').version).parse(process.argv);

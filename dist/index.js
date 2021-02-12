"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const commander_1 = require("commander");
const create_1 = tslib_1.__importDefault(require("./actions/create"));
const childCommand_1 = tslib_1.__importDefault(require("./childCommand"));
const program = new commander_1.Command('vmc');
program
    .usage('create <projectName> [options]')
    .command('create <projectName>')
    .description('创建项目')
    .option('-t --tool [value]', '选择构建工具：webpack|gulp', 'webpack')
    .option('-i --install', '是否自动安装依赖', false)
    .option('-pt --pkg-tool [value]', 'npm or yarn?')
    .action(create_1.default);
program.addCommand(childCommand_1.default(commander_1.Command));
program.addHelpText('after', `
  Example create a project:
    $ vmc create helloWorld
`);
program.version(require('../package.json').version).parse(process.argv);

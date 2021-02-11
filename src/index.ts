import { Command } from 'commander';

const program = new Command('vmc');
program
  .command('create <projectName>')
  .description('创建项目')
  .option('-ao --arg-one [oneValue]', '参数一')
  .option('-at --arg-two [towValue]', '参数二', 'b')
  .option('-s --small', '是否是最小的', true)
  .option('-def --defArg [type]', '默认参数', '默认的type')
  .option('-l --long [value...]', '长参数')
  .action((projectName, options) => {
    console.log('projectName', projectName);
    console.log('options', options);
  });

program.parse(process.argv);

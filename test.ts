import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '请输入姓名'
  },
  {
    type: 'list',
    name: 'pkgTool',
    choices: ['npm', 'yarn'],
    default: 'npm',
    message: 'npm or yarn'
  }
]).then(answers => {
  console.log('answers', answers);
})

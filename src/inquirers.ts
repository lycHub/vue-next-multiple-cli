const installQues = {
  type: 'confirm',
  name: 'install',
  default: false,
  message: '是否安装依赖？'
}

const pkgToolQues = {
  type: 'list',
  name: 'pkgTool',
  choices: ['npm', 'yarn'],
  default: 'npm',
  message: 'npm or yarn ？'
}

const pageTypeQues = {
  type: 'list',
  name: 'pageType',
  choices: ['webpack', 'gulp'],
  default: 'webpack',
  message: 'webpack or gulp ？'
}

export { installQues, pkgToolQues, pageTypeQues };

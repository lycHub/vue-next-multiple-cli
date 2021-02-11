import download from 'download-git-repo';
import {promisify} from "util";
import {readdirSync, readFileSync, statSync, writeFileSync} from 'fs';
import { partition } from 'lodash';
import template from 'art-template';

interface FileItem {
  file: string;
  isDir: boolean;
}

const downloadTemplate = promisify<string, string, { clone: boolean; }>(download);
const projectName = 'temp';
// downloadTemplate('direct:https://github.com/lycHub/vue-next-mutiple-template.git#gulp', projectName, { clone: true }).then(() => {
//   console.log('成');
//   recursiveDir(projectName)
// });

const allFiles = recursiveDir(projectName);
if (allFiles.length) {
  const files = partition(allFiles, 'isDir')[1];
  // files.forEach(item => {
  //   console.log('files', item);
  // });
  // console.log(files);
  const pkgJson = files[7];
  console.log('pkgJson', pkgJson);
  // const content = readFileSync(pkgJson.file, 'utf-8');
  // console.log('content', content);

  // 忽略asset文件夹
  const newContent = template(process.cwd() + '/' + pkgJson.file, { projectName, author: 'zgcf' });
  // // const dest = pkgJson.file.split('/').slice(1).join('/');
  // writeFileSync(pkgJson.file, newContent);
}

function recursiveDir(sourceDir: string) {
  const res: FileItem[] = [];
  function traverse(dir: string) {
    readdirSync(dir).forEach((file: string) => {
      const pathname = `${dir}/${file}`; // temp/.gitignore
      const isDir = statSync(pathname).isDirectory();
      res.push({ file: pathname, isDir });
      if (isDir) {
        traverse(pathname);
      }
    })
  }
  traverse(sourceDir);
  return res;
}

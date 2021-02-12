import {readdirSync, statSync} from "fs";
import execa from 'execa';

interface FileItem {
  file: string;
  isDir: boolean;
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


function exec(command: string, options: execa.Options) {
  return new Promise((resolve, reject) => {
    const subProcess = execa.command(command, options);
    subProcess.stdout!.pipe(process.stdout);
    subProcess.stdout!.on('close', resolve);
    subProcess.stdout!.on('error', reject);
  });
}


function hasYarn(): boolean {
  try {
    execa.commandSync('yarn -v', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

export { recursiveDir, exec, hasYarn };

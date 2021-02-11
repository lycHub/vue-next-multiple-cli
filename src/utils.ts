import {readdirSync, statSync} from "fs";

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

export { recursiveDir };

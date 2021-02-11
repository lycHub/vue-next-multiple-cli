import download from 'download-git-repo';
import {promisify} from "util";

const downloadTemplate = promisify<string, string, { clone: boolean; }>(download);

downloadTemplate('direct:https://github.com/lycHub/vue-next-mutiple-template.git#gulp', 'temp', { clone: true }).then(() => {
  console.log('成');
});

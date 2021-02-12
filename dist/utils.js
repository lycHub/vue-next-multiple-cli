"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasYarn = exports.exec = exports.recursiveDir = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const execa_1 = tslib_1.__importDefault(require("execa"));
function recursiveDir(sourceDir) {
    const res = [];
    function traverse(dir) {
        fs_1.readdirSync(dir).forEach((file) => {
            const pathname = `${dir}/${file}`; // temp/.gitignore
            const isDir = fs_1.statSync(pathname).isDirectory();
            res.push({ file: pathname, isDir });
            if (isDir) {
                traverse(pathname);
            }
        });
    }
    traverse(sourceDir);
    return res;
}
exports.recursiveDir = recursiveDir;
function exec(command, options) {
    return new Promise((resolve, reject) => {
        const subProcess = execa_1.default.command(command, options);
        subProcess.stdout.pipe(process.stdout);
        subProcess.stdout.on('close', resolve);
        subProcess.stdout.on('error', reject);
    });
}
exports.exec = exec;
function hasYarn() {
    try {
        execa_1.default.commandSync('yarn -v', { stdio: 'ignore' });
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.hasYarn = hasYarn;

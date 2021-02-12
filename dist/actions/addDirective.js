"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const art_template_1 = tslib_1.__importDefault(require("art-template"));
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
function default_1(name) {
    let basePath = 'directives';
    let trueName = name;
    const data = name.split('/');
    if (data.length > 1) {
        trueName = data.pop();
        basePath = data.join('/');
    }
    try {
        const content = art_template_1.default(path_1.join(__dirname, '../../templates', 'directive.ts'), { name: trueName });
        const dest = `src/${basePath}/${trueName}.ts`;
        fs_extra_1.outputFileSync(dest, content);
        console.log(chalk_1.default.green('创建成功>>', dest));
    }
    catch (e) {
        console.log(chalk_1.default.red('创建失败'));
        throw e;
    }
}
exports.default = default_1;

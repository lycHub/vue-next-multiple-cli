"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const art_template_1 = tslib_1.__importDefault(require("art-template"));
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const inquirers_1 = require("../inquirers");
function default_1(name) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const { pageType } = yield inquirer_1.default.prompt([inquirers_1.pageTypeQues]);
            const tplPath = path_1.join(__dirname, '../../templates/page', pageType);
            const files = fs_extra_1.readdirSync(tplPath);
            // console.log('files', files);
            files.forEach(file => {
                const content = art_template_1.default(tplPath + '/' + file, { name });
                const dest = `src/pages/${name}/${file}`;
                fs_extra_1.outputFileSync(dest, content);
            });
            console.log(chalk_1.default.green('创建成功>>', pageType));
        }
        catch (e) {
            console.log(chalk_1.default.red('创建失败'));
            throw e;
        }
    });
}
exports.default = default_1;

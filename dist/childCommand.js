"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const addComponent_1 = tslib_1.__importDefault(require("./actions/addComponent"));
const addDirective_1 = tslib_1.__importDefault(require("./actions/addDirective"));
const addPage_1 = tslib_1.__importDefault(require("./actions/addPage"));
function default_1(Command) {
    const generate = new Command('add');
    generate
        .command('c <name>')
        .description('添加一个组件')
        .option('--tsx', 'Is tsx', false)
        .action(addComponent_1.default);
    generate
        .command('d <name>')
        .description('添加一个指令')
        .action(addDirective_1.default);
    generate
        .command('p <name>')
        .description('添加一个页面')
        .action(addPage_1.default);
    return generate;
}
exports.default = default_1;

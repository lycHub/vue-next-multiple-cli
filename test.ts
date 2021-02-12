import template from 'art-template';
import { kebabCase } from 'lodash';
import { join } from 'path';
import {outputFileSync} from "fs-extra";

// add c compA // src/components/compA.vue
// add c a/b/c/d/compA // src/a/b/c/d/compA.vue


const name = 'a/b/c/compAB'; // rootCls: comp-a
let basePath = 'components';
let trueName = name;
const data = name.split('/');
if (data.length > 1) {
  trueName = data.pop()!;
  basePath = data.join('/');
}
let suffix = '.vue';
const isTsx = false;
if (isTsx) {
  suffix = '.tsx';
}

try {
  const content = template(
    join(__dirname, 'templates', 'component' + suffix),
    { name: trueName, rootCls: kebabCase(trueName) }
  );
  const dest = `src/${basePath}/${trueName}${suffix}`;
  outputFileSync(dest, content);
} catch (e) {
  throw e;
}

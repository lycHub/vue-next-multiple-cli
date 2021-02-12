import template from 'art-template';
import { kebabCase } from 'lodash';
import { join } from 'path';
import {writeFileSync} from "fs";

// add c compA // src/components/compA.vue
// add c a/b/c/d/compA // src/a/b/c/d/compA.vue


const name = 'compA'; // rootCls: comp-a
let suffix = '.vue';
const isTsx = true;
if (isTsx) {
  suffix = '.tsx';
}

try {
  const content = template(
    join(__dirname, 'templates', 'component' + suffix),
    { name, rootCls: kebabCase(name) }
  );
  const dest = `src/components/${name}${suffix}`;
  console.log('content', content);
  console.log('dest', dest);
  // writeFileSync(dest, content); components目录不存在
} catch (e) {
  throw e;
}

import { src, dest, series } from 'gulp';
import del from 'del';
import gts from 'gulp-typescript';

const outputDir = 'dist';

function clean() {
  return del(outputDir);
}

function script() {
  return src('src/**/*.ts', { base: 'src' })
    .pipe(gts.createProject('tsconfig.json')())
    .pipe(dest(outputDir));
}

export default series(clean, script);

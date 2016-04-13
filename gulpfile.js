'use strict';

const gulp = require('gulp');
const args = require('yargs').argv;
const mocha = require('gulp-mocha');

/**
 * Runs the test swuite matching the glob pattern *_test.js.
 * @return {function()}
 */
function testsTask(testType) {
  var globs = [
    '!node_modules',
    '!node_modules/**'
  ];

  var hasTestType = typeof testType == 'string';

  if (!hasTestType || (testType == TESTS.UNIT)) {
    if (!args || !args.file) globs.push('./**/*_test.js');
    else globs.push('./**/*' + args.file + '*_test.js');
  }

  return gulp.src(globs, { read: false })
  .pipe(mocha({}))
  .once('error', (err) => {
    console.error(err);
    process.exit(1);
  })
  .once('end', () => process.exit());
}

gulp.task('test', testsTask);
gulp.task('default', ['test']);

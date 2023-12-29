/**
 * Install: npm install -g jscodeshift
 */

const { run: jscodeshift } = require("jscodeshift/src/Runner");
const path = require("node:path");

const transformPath = path.resolve("src/transformers/basic-transformer.js");
const paths = ["src/examples/some-example-code.js"];
const options = {
  dry: true,
  print: true,
  verbose: 1,
};

const res = await jscodeshift(transformPath, paths, options);
console.log(res);
/*
{
  stats: {},
  timeElapsed: '0.001',
  error: 0,
  ok: 0,
  nochange: 0,
  skip: 0
}
*/

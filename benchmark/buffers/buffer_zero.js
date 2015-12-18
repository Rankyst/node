'use strict';

const common = require('../common.js');

const bench = common.createBenchmark(main, {
  n: [1024],
  type: ['buffer', 'string']
});

const zeroBuffer = new Buffer(0);
const zeroString = '';

function main(conf) {
  var n = +conf.n;
  bench.start();
  for (let i = 0; i < n * 1024; i++) {
    conf.type === 'buffer' ? new Buffer(zeroBuffer) : new Buffer(zeroString);
  }
  bench.end(n);
}

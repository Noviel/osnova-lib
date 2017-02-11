// Created by snov on 17.01.2017.

const { defaults } = require('../build/index');

const dst = {
  a: 1,
  b: true,
  c: {
    sub: 'sub',
    opps: {
      lul: 'lul'
    }
  }
};

const def = {
  x: 666,
  b: {
    val: 'i will never surrender'
  },
  c: {
    sub: 'def sub',
    opps: {
      hops: 'yay!'
    }
  }
};

console.log(defaults(dst, def, false));
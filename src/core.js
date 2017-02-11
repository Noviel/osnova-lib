// Created by snov on 27.08.2016.
const clone = require('clone');

const tagObj = '[object Object]',
      tagArr = '[object Array]',
      typeObj = 'object',
      typeFunction = 'function',
      typeUndefined = 'undefined';

const objToStr = (o) => {
  return Object.prototype.toString.call(o);
};

export function isObject (o) {
  return o != null && typeof o == typeObj;
}

export function isArray (o) {
  return typeof o == typeObj && objToStr(o) == tagArr;
}

export function isFunction (o) {
  return typeof o == typeFunction;
}

export function isUndefined (o) {
  return typeof o == typeUndefined;
}

export function defaults(opts, def, deep = true) {
  opts = opts || {};

  Object.keys(def).forEach(function(key) {
    if (deep && isObject(opts[key]) && isObject(def[key]))
      opts[key]= defaults(opts[key], def[key]);

    if (isUndefined(opts[key]))
      opts[key] = clone(def[key]);
  });

  return opts;
}

export function defaultsMA(dst, src) {
  if (!src) return dst;
  if (!dst) dst = {};

  for (let j in src) {
    if (src.hasOwnProperty(j)) {
      if (isArray(src[j])) {
        if (isArray(dst[j])) {
          dst[j] = dst[j].concat(src[j]);
        } else if (!dst[j]) {
          dst[j] = [].concat(src[j]);
        }
      } else if (isObject(src[j])) {
        dst[j] = defaultsMA(dst[j], src[j]);
      }

      if (dst[j] === undefined) { dst[j] = src[j]; }
    }
  }

  return dst;
}
// Created by snov on 27.08.2016.

const tagObj = '[object Object]',
      tagArr = '[object Array]',
      typeObj = 'object';

const objToStr = (o) => {
  return Object.prototype.toString.call(o);
};

export function isObject (o) {
  return o != null && typeof o == typeObj;
}

export function isArray (o) {
  return typeof o == 'object' && objToStr(o) == tagArr;
}

export function isFunction (o) {
  return typeof o == 'function';
}

export function defaults(dst, src) {
  if (!src) return dst;
  if (!dst) dst = {};

  for (let j in src) {
    if (src.hasOwnProperty(j)) {
      if (isObject(dst[j]) && isObject(src[j])) {
        dst[j] = defaults(dst[j], src[j]);
      }

      if (dst[j] === undefined)
        dst[j] = src[j];
    }
  }

  return dst;
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
        dst[j] = defaultsMergeArrays(dst[j], src[j]);
      }

      if (dst[j] === undefined) { dst[j] = src[j]; }
    }
  }

  return dst;
}

export function defaultsMultiple(dst, ...src) {
  for (let i = 0; i < src.length; i++) {
    dst = defaults(dst, src[i]);
  }
  return dst;
}

export function defaultsMultipleMA(dst, ...src) {
  for (let i = 0; i < src.length; i++) {
    dst = defaultsMA(dst, src[i]);
  }
  return dst;
}

export function cif(input) {
  return isFunction(input) ? input() : input;
}
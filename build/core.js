'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.defaults = defaults;
exports.defaultsMA = defaultsMA;
exports.defaultsMultiple = defaultsMultiple;
exports.defaultsMultipleMA = defaultsMultipleMA;
exports.cif = cif;
// Created by snov on 27.08.2016.

var tagObj = '[object Object]',
    tagArr = '[object Array]',
    typeObj = 'object';

var objToStr = function objToStr(o) {
  return Object.prototype.toString.call(o);
};

function isObject(o) {
  return o != null && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == typeObj;
}

function isArray(o) {
  return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == 'object' && objToStr(o) == tagArr;
}

function isFunction(o) {
  return typeof o == 'function';
}

function defaults(dst, src) {
  if (!src) return dst;
  if (!dst) dst = {};

  for (var j in src) {
    if (src.hasOwnProperty(j)) {
      if (isObject(dst[j]) && isObject(src[j])) {
        dst[j] = defaults(dst[j], src[j]);
      }

      if (dst[j] === undefined) dst[j] = src[j];
    }
  }

  return dst;
}

function defaultsMA(dst, src) {
  if (!src) return dst;
  if (!dst) dst = {};

  for (var j in src) {
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

      if (dst[j] === undefined) {
        dst[j] = src[j];
      }
    }
  }

  return dst;
}

function defaultsMultiple(dst) {
  for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    src[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < src.length; i++) {
    dst = defaults(dst, src[i]);
  }
  return dst;
}

function defaultsMultipleMA(dst) {
  for (var _len2 = arguments.length, src = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    src[_key2 - 1] = arguments[_key2];
  }

  for (var i = 0; i < src.length; i++) {
    dst = defaultsMA(dst, src[i]);
  }
  return dst;
}

function cif(input) {
  return isFunction(input) ? input() : input;
}
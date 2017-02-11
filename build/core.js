'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.defaults = defaults;
exports.defaultsMA = defaultsMA;
// Created by snov on 27.08.2016.
var clone = require('clone');

var tagObj = '[object Object]',
    tagArr = '[object Array]',
    typeObj = 'object',
    typeFunction = 'function',
    typeUndefined = 'undefined';

var objToStr = function objToStr(o) {
  return Object.prototype.toString.call(o);
};

function isObject(o) {
  return o != null && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == typeObj;
}

function isArray(o) {
  return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == typeObj && objToStr(o) == tagArr;
}

function isFunction(o) {
  return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == typeFunction;
}

function isUndefined(o) {
  return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == typeUndefined;
}

function defaults(opts, def) {
  var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  opts = opts || {};

  Object.keys(def).forEach(function (key) {
    if (deep && isObject(opts[key]) && isObject(def[key])) opts[key] = defaults(opts[key], def[key]);

    if (isUndefined(opts[key])) opts[key] = clone(def[key]);
  });

  return opts;
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
        dst[j] = defaultsMA(dst[j], src[j]);
      }

      if (dst[j] === undefined) {
        dst[j] = src[j];
      }
    }
  }

  return dst;
}
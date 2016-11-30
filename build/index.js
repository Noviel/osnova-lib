'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.express = exports.core = undefined;

var _core2 = require('./core');

var _core = _interopRequireWildcard(_core2);

var _express2 = require('./express.util');

var _express3 = _interopRequireDefault(_express2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Created by snov on 30.11.2016.

var library = {
  core: _core,
  express: _express3.default
};

exports.default = library;
var core = exports.core = _core,
    express = exports.express = _express3.default;
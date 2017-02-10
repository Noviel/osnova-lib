"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyMiddleware = emptyMiddleware;
exports.safeMiddlewares = safeMiddlewares;
exports.isAuth = isAuth;
exports.isNotAuth = isNotAuth;
exports.checkAuth = checkAuth;
// Created by snov on 18.09.2016.

function emptyMiddleware(req, res, next) {
  next();
}

function safeMiddlewares(list) {
  if (list && list.length >= 1) {
    return list;
  }
  return this.emptyMiddleware;
}

function isAuth(req, res, next) {
  if (req.user) {
    next();
    return;
  }
  //res.redirect('/');
}

function isNotAuth(req, res, next) {
  if (!req.user) {
    next();
    return;
  }
  //res.redirect('/');
}

function checkAuth(req, res, next) {}
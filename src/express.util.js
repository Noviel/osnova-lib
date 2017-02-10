// Created by snov on 18.09.2016.

export function emptyMiddleware (req, res, next) {
  next();
}

export function safeMiddlewares (list) {
  if (list && list.length >= 1) {
    return list;
  }
  return this.emptyMiddleware;
}

export function isAuth (req, res, next) {
  if (req.user) {
    next();
    return;
  }
  //res.redirect('/');
}

export function isNotAuth (req, res, next) {
  if (!req.user) {
    next();
    return;
  }
  //res.redirect('/');
}

export function checkAuth(req, res, next) {

}
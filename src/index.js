// Created by snov on 30.11.2016.

import * as _core from './core';
import _express from './express.util';

const library = {
  core: _core,
  express: _express
};

export default library;
export const core = _core, express = _express;
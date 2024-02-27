/* Copyright (c) 2023 Reminano */

'use strict';

class Error {
  constructor(message) {
    this.message = message;
    this.name = 'Error';
  }
}

module.exports = Error;
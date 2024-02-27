/* Copyright (c) 2023 Reminano */

'use strict';

const packageJson = require('../../../package.json');

const appName = packageJson.name + '-node';
const appVersion = packageJson.version;

module.exports = {
  appName,
  appVersion,
};
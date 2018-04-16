/**
 * Copyright 2017 HUAWEI. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 */

"use strict";

module.exports.info = "querying accounts";

var bc, contx;
var accounts;
module.exports.init = function(blockchain, context, args) {
  bc = blockchain;
  contx = context;
  accounts = args.accounts;
  return Promise.resolve();
};

module.exports.run = function() {
  var acc = accounts[Math.floor(Math.random() * accounts.length)];
  return bc.queryState(contx, "simple", "1.0", acc);
};

module.exports.end = function(results) {
  // do nothing
  return Promise.resolve();
};
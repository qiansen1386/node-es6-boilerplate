/*
 * This can be useful when bable-node is not an option,
 * while you still want to run the source instead of compiled files.
 */
/* eslint-disable */
// only ES5 is allowed in this file
require("babel/register");

// other babel configuration, if necessary

// load your app
var app = require("./app.js");

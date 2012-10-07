/**
 * User: david
 * Date: 7.10.12
 */

"use strict";

var server = require("./server.js");

exports.testNothing = function(test) {
    test.equal(3, server.number(), "number");
    test.done();
};

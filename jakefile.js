/*global desc, task, jake, fail, complete */

(function() {

"use strict";

desc("Build and test");
task("default", ["lint"]);

desc("Lint everything");
task("lint", [], function() {
   var lint = require("./build/lint/lint_runner.js");

   var files = new jake.FileList();
    files.include("**/*.js");
    files.exclude("node_modules");

    var options = nodeLintOptions();

    lint.validateFileList(files.toArray(), options, {});
});

desc("Integrate");
task("integrate", ["default"], function(){
   console.log("1. Make sure 'git status' is clean.");
   console.log("2. Build on the integration box. [Windows box]");
   console.log("    a. Walk over to the integration box");
   console.log("    b. 'git pull'");
   console.log("    c. 'jake'");
   console.log("    d. If jake fails, stop! Try again after fixing issues.");
   console.log("3. 'git checkout integration'");
   console.log("4. 'git merge master --no-ff --log'");
   console.log("5. 'git checkout master'");
});


function nodeLintOptions() {
    return {
        bitwise:true,
        curly:false,
        eqeqeq:true,
        forin:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        noempty:true,
        nonew:true,
        regexp:true,
        undef:true,
        strict:true,
        trailing:true,
        node:true
    };
}

})();
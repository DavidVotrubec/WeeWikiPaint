desc("Example description");
task("example", ["dependency"], function() {
   console.log("example task");
});

task("dependency", function() {
    console.log("dependency run");
    console.log("dependency run");
});
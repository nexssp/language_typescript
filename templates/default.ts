// Nexss PROGRAMMER 2.0.0 - TypeScript
// Default template for JSON Data

const { execSync } = require('child_process');
var stdin = process.openStdin();
var data = "";
stdin.addListener("data", function (d) {
    data += d.toString()
});

stdin.addListener("end", function () {
    var NexssStdin = JSON.parse(data)

    NexssStdin['test'] = "test"

    var NexssStdout = JSON.stringify(NexssStdin)
    console.log(NexssStdout)
});
// Nexss PROGRAMMER 2.0.0 - TypeScript
// Default template for JSON Data

const { execSync } = require('child_process');
var stdin = process.openStdin();
var data = "";
stdin.addListener("data", function (d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then substring() 
    data += d.toString()
});

stdin.addListener("end", function () {
    var NexssStdin = JSON.parse(data)

    NexssStdin['HelloFromTypeScript'] = execSync("tsc --version").toString().trim()

    var NexssStdout = JSON.stringify(NexssStdin)
    console.log(NexssStdout)
});
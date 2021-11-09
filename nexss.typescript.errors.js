module.exports = {
  "Try `npm i (.*?)`": "nexss js install <package>",
  "Cannot find module '(.*?)'": "nexss js install <package>",
  "ReferenceError: (?<found1>.*?) is not defined":
    "Define variable <found1> as it is not found. (This is an example of error solution in the Nexss Programmer. " +
    "You can add your own one for every languages. " +
    "For more please here: https://github.com/nexssp/cli/wiki/Errors-Solutions" +
    ")",
};

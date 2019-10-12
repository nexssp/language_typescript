const { ProgrammingLanguage } = require("../../lib/programmingLanguage");
const pl = new ProgrammingLanguage(".ts");

pl.add("title", "typescript");
pl.add("description", `Typescript`);
pl.add("packageManager", { all: "npm install" });
pl.add("packageManagerInstallation", {
  all: "npm install -g ts-node"
});

pl.add("compiler", "ts-node");

pl.add("compilerInstallation", {
  all: "npm install -g ts-node"
});
pl.add("packageManager", {
  all: "npm install <package>"
});

pl.add("url", "https://www.typescriptlang.org/");
pl.addError("Try `(.*?)`", {
  win32: "nexss install ts <package>",
  darwin: "nexss install ts <package>",
  linux: "nexss install ts <package>"
});

pl.addHelp("executeCommandLine", "ts-node -r");
pl.addHelp("InteractiveShell", "ts-node -a");

module.exports = pl.data;

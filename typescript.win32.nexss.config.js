let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Typescript";
languageConfig.description =
  "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.";
languageConfig.url = "https://www.typescriptlang.org/";
languageConfig.founders = ["Microsoft"];
languageConfig.developers = [
  "https://github.com/nodejs/node/blob/master/AUTHORS",
];
languageConfig.years = ["2012"];
languageConfig.extensions = [".js"];
languageConfig.licenses = [
  "Apache License 2.0 https://github.com/microsoft/TypeScript/blob/master/LICENSE.txt",
];
languageConfig.extensions = [".ts"];
languageConfig.builders = {};
languageConfig.compilers = {
  "ts-node": {
    install: "npm install -g ts-node @types/node typescript",
    command: "ts-node",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.typescript.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "installed.",
    messageAfterInstallation: null, // sometimes there is need of add something to the files can be add here eg php for composer.
    installed: "npm list",
    search: "npm search",
    install: "npm install",
    uninstall: "npm remove",
    help: "npm help",
    version: "npm --version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "package.json")
        )
      ) {
        require("child_process").execSync("npm init -y && npm i @types/node");
        console.log("initialize npm project.");
      } else {
        console.log("npm already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "npm",
  },
};

module.exports = languageConfig;

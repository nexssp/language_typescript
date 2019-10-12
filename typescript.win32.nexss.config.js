let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Typescript";
languageConfig.description =
  "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.";
languageConfig.url = "https://www.typescriptlang.org/";
languageConfig.extensions = [".ts"];
languageConfig.builders = {};
languageConfig.compilers = {
  "ts-node": {
    install: "npm install -g ts-node @types/node",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "ts-node",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.typescript.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "installed.",
    messageAfterInstallation: null, // sometimes there is need of add something to the files can be add here eg php for composer.
    installed: "npm list <args>",
    search: "npm search <args>",
    install: "npm install <args>",
    uninstall: "npm remove <args>",
    help: "npm help <args>",
    version: "npm --version",
    init: () => {
      const { debug } = require("../../lib/log");
      const d = debug("nexss:config.base");
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "package.json")
        )
      ) {
        require("child_process").execSync("npm init -y");
        d("initialize npm project.");
      } else {
        d("npm already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "npm <default> <args>"
  }
};

module.exports = languageConfig;

let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);

const sudo = process.sudo;

languageConfig.title = "Typescript";
languageConfig.description =
  "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.";
languageConfig.url = "https://www.typescriptlang.org/";
languageConfig.founders = ["Microsoft"];
languageConfig.developers = [
  "https://github.com/nodejs/node/blob/master/AUTHORS",
];
languageConfig.years = ["2012"];
languageConfig.licenses = [
  "Apache License 2.0 https://github.com/microsoft/TypeScript/blob/master/LICENSE.txt",
];
languageConfig.extensions = [".ts"];
languageConfig.builders = {};
languageConfig.compilers = {
  "ts-node": {
    install:
      process.platform !== "win32"
        ? `if ! command -v npm &> /dev/null; then ${sudo}apt-get install -y npm; fi
${sudo}npm install -g ts-node @types/node typescript`
        : `npm install -g ts-node @types/node typescript`,
    command: "ts-node",
    args: "--log-error <file>",
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
    version: "tsc --version",
    init: () => {
      const { existsSync } = require("fs");
      const { join } = require("path");
      const { execSync } = require("child_process");
      if (!existsSync(join(process.cwd(), "package.json"))) {
        console.log("Setup npm project");
        execSync("npm init -y");
        console.log("Setup npm project: done.");
      } else {
        console.log("npm project already initialized.");
      }

      if (!existsSync(join(process.cwd(), "tsconfig.json"))) {
        console.log("Setup Typescript..");
        execSync("tsc --init"); // creates tsconfig.json with all the descriptions
        execSync("npm i @types/node"); // creates tsconfig.json with all the descriptions
      } else {
        console.log("Typescript already initialized.");
      }

      if (!existsSync(join(process.cwd(), ".gitignore"))) {
        console.log("Creating .gitignore");
        execSync("npx gitignore node"); // creates tsconfig.json with all the descriptions
      } else {
        console.log(".gitignore is already setup");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "npm",
  },
};

module.exports = languageConfig;

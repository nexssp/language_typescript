module.exports = {
  description: "Typescript",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "ts-node",
  extension: ".ts",
  errors: {
    "'ts-node'": {
      all: "npm install -g ts-node"
    },
    "Cannot find module 'typescript'": {
      all: "npm install -g typescript"
    },
    "Try `(.*?)`": {
      all: "<package>"
    }
  },
  url: "https://www.typescriptlang.org/"
};

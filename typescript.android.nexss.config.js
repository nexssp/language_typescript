let languageConfig = Object.assign(
  {},
  require(`./typescript.win32.nexss.config.js`)
);

languageConfig.compilers.deno = {
  install: `npm install -g ts-node @types/node typescript`,
  command: "ts-node",
  args: "--log-error <file>",
  help: ``,
  // templates: "templates_deno",
};

module.exports = languageConfig;

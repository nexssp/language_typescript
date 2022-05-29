const sudo = process.sudo;

let languageConfig = Object.assign(
  {},
  require(`./typescript.win32.nexss.config.js`)
);

languageConfig.compilers.deno = {
  install:
    process.replacePMByDistro(`${sudo}apt-get install unzip`) +
    `
curl -fsSL https://deno.land/x/install/install.sh | sh`,
  command: "deno",
  args: "run <file>",
  help: ``,
  templates: "templates_deno",
};

module.exports = languageConfig;

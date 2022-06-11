# TypeScript Implementation for Nexss Programmer

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Links

- Awesome TypeScript - <https://github.com/dzharii/awesome-typescript#awesome-typescript>
- CheatSheet - <https://rmolinamir.github.io/typescript-cheatsheet/>
- TypeScript handbook: <https://www.typescriptlang.org/docs/handbook/>

## To change runtimes/compilers

```sh
nexss ts default compiler # displays all available runtimes/compilers
nexss ts default compiler deno # to set the Deno compiler
nexss ts default compiler node # to set the Node.js compiler
nexss ts default compiler unset # to reset to defaults (Node.js)

nexss ts default compiler --nocache # use --nocache if you have changed configuration files manually
```

OR put at the top of your file/program. If will install compiler on 'nexss yourprogram.ts'

```js
// nexss-compiler: deno

console.log(`Hello from Deno! ${Deno.version.deno}`);
```

## Interesting links

- Deno by Example: <https://examples.deno.land/>

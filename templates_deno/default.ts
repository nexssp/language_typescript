// nexss-compiler: deno
// Deno runtime default.ts for Nexss Programmer 2.x
export { }
const buf = new Uint8Array(4096); // Adjust to your needs

const n = <number>await Deno.stdin.read(buf);
const NexssStdin = new TextDecoder().decode(buf.subarray(0, n));
let NexssStdout = JSON.parse(NexssStdin.toString());

NexssStdout.test = `test`;

console.log(JSON.stringify(NexssStdout));
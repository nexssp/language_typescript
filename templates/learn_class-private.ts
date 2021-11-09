// tsconfig.json
// {
//   "compilerOptions": {
//     "module": "esnext",
//       "target": "es2017"
//   }
// }

class MyClass {
  #myvar: string;
  constructor(myvar: string) {
    this.#myvar = myvar;
  }
  func() {
    console.log(`This is a message ${this.#myvar}!`);
  }
}

new MyClass("Something here").func();

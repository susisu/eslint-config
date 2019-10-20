export const foo = 42;

export interface IFoo {
  prop: string;
}

export class Foo implements IFoo {
  prop: string;

  constructor() {
    this.prop = "bar";
  }
}

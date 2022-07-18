import type Child from "./Child";

export default class Parent {
  readonly id: number;
  name: string;
  child: Child;

  constructor(child: Child) {
    this.id = 1;
    this.child = child;
  }
}
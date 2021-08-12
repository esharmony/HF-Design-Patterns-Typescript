import Beverage from "./Abstractions/Beverage";

export default class Espresso extends Beverage {
  constructor() {
    super();
    this.Description = 'Espresso';
  }

  public Cost(): number {
    return 1.99;
  }
}

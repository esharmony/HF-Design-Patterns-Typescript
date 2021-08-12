import Beverage from "./Abstractions/Beverage";

export default class DarkRoast extends Beverage {

  public Description: string;

  constructor() {
    super();
    this.Description = 'Dark Roast Coffee';
  }

  public Cost(): number {
    return 0.99;
  }
}

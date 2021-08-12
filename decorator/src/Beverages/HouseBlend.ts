import Beverage from "./Abstractions/Beverage";

export default class HouseBlend extends Beverage {
  constructor() {
    super();
    this.Description = 'House Blend';
  }

  public Cost(): number {
    return 0.89;
  }
}
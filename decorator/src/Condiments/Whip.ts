import Beverage from '../Beverages/Abstractions/Beverage';
import CondimentDecorator from './Abstractions/CondimentDecorator';

export default class Whip extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  Description = `${this.beverage.Description}, Whip`;

  public Cost(): number {
    return 0.1 + this.beverage.Cost();
  }
}

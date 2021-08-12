import Beverage from '../Beverages/Abstractions/Beverage';
import CondimentDecorator from './Abstractions/CondimentDecorator';

export default class Soy extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  Description = `${this.beverage.Description}, Soy`;

  public Cost(): number {
    return 0.15 + this.beverage.Cost();
  }
}

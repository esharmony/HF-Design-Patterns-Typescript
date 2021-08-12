import Beverage from '../Beverages/Abstractions/Beverage';
import CondimentDecorator from './Abstractions/CondimentDecorator';

export default class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  Description = `${this.beverage.Description}, Mocha`;

  public Cost(): number {
    return 0.2 + this.beverage.Cost();
  }
}

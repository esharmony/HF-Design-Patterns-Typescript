import Beverage from '../../Beverages/Abstractions/Beverage';

export default abstract class CondimentDecorator extends Beverage {
  abstract Description: string;
}

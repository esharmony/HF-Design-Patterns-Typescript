import Duck from './Abstractions/Duck';
import FlyNoWay from '../Behaviors/FlyNoWay';
import FlyBehavior from '../Behaviors/Abstractions/FlyBehavior';

class RubberDuck extends Duck {
	flyBehavior: FlyBehavior;

	constructor() {
		super();
		this.flyBehavior = new FlyNoWay();
	}

	display = ():void => console.log(`I'm a rubber duck`);
}

export default RubberDuck;

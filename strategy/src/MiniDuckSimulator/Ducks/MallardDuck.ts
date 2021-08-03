import Duck from './Abstractions/Duck';
import FlyWithWings from '../Behaviors/FlyWithWings'
import FlyBehavior from '../Behaviors/Abstractions/FlyBehavior';

class MallardDuck extends Duck {
    flyBehavior: FlyBehavior;

    constructor() {
        super();
        this.flyBehavior = new FlyWithWings();
    }

    display = ():void => console.log(`I'm a Mallard`);
    
}

export default MallardDuck;
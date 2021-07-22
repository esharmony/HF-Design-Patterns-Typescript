import FlyBehavior from '../../Behaviors/Abstractions/FlyBehavior';

abstract class Duck {
    abstract flyBehavior: FlyBehavior;
    
    performFly = ():void => {
        this.flyBehavior.fly();
    }

    abstract display:() => void;

    setFlyBehavior = (fb: FlyBehavior) => {
        this.flyBehavior = fb;
    }
}

export default Duck;
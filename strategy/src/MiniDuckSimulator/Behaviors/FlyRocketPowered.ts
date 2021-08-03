import FlyBehavior from './Abstractions/FlyBehavior';

class FlyRocketPowered implements FlyBehavior {
    fly = ():void => console.log(`I'm now flying with a rocket!`);
}

export default FlyRocketPowered;
import MallardDuck from './MiniDuckSimulator/Ducks/MallardDuck';
import RubberDuck from './MiniDuckSimulator/Ducks/RubberDuck';
import FlyRocketPowered from './MiniDuckSimulator/Behaviors/FlyRocketPowered';

const mallard = new MallardDuck();
const rubberDuck = new RubberDuck();
mallard.display();
mallard.performFly();

rubberDuck.display();
rubberDuck.performFly();
rubberDuck.setFlyBehavior(new FlyRocketPowered());
rubberDuck.performFly();
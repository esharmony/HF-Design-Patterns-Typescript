import DarkRoast from "./Beverages/DarkRoast";
import Espresso from "./Beverages/Expresso";
import HouseBlend from "./Beverages/HouseBlend";
import Mocha from "./Condiments/Mocha";
import Soy from "./Condiments/Soy";
import Whip from "./Condiments/Whip";

let beverage = new Espresso();
console.log(`${beverage.Description} £${beverage.Cost()}`);

let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`${beverage2.Description} £${beverage2.Cost()}`);

let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(`${beverage3.Description} £${beverage3.Cost()}`);

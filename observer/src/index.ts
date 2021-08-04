import WeatherData from './WeatherStation/Subjects/WeatherData';
import CurrentConditionsDisplay from './WeatherStation/Observers/CurrentConditionsDisplay';
import ForcastDisplay from './WeatherStation/Observers/ForcastDisplay';
import StatisticsDisplay from './WeatherStation/Observers/StatisticsDisplay';
import HeatIndexDisplay from './WeatherStation/Observers/HeatIndexDisplay';

const weatherData = new WeatherData();

new CurrentConditionsDisplay(weatherData);
let forcastDisplay = new ForcastDisplay(weatherData);
new StatisticsDisplay(weatherData);
new HeatIndexDisplay(weatherData);
console.log(' ');
console.log('first day');
console.log(' ');
weatherData.setMeasurements(80, 65, ('30.4d') as unknown as number);
console.log(' ');
console.log('next day');
console.log(' ');
weatherData.setMeasurements(82, 70, ('29.2d') as unknown as number);
console.log(' ');
console.log('next day');
console.log(' ');
console.log('unregistering forcast');
forcastDisplay.unregisterForcast();
weatherData.setMeasurements(78, 90, ('29.2d') as unknown as number);
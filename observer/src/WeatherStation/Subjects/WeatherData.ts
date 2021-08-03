import Observer from "../Observers/Abstractions/Observer";
import observer from "../Observers/Abstractions/Observer";
import Subject from "./Abstractions/Subject";

class WeatherData implements Subject {

    private observers: Observer[];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    constructor() {
        this.observers = [];
    }

    measurementsChanged = (): void => 
    {
        this.notifyObservers();
    }

    setMeasurements(temperature:number, humidity:number, pressure:number): void
    {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanged();
    }

    registerObserver = (o: observer): void => {
        this.observers.push(o);
    };

    removeObserver = (o: observer): void => {
        this.observers.splice(this.observers.indexOf(o), 1);
    };

    notifyObservers = (): void => {
        this.observers.forEach(observer => observer.update(this.temperature, this.humidity, this.pressure))
    };

}

export default WeatherData;
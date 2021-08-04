import Subject from "../Subjects/Abstractions/Subject";
import DisplayElement from "./Abstractions/DisplayElement";
import Observer from "./Abstractions/Observer";

class ForecastDisplay implements Observer, DisplayElement
{
    private currentPressure = '29.92d' as unknown as number;
    private lastPressure: number = 0;
    private readonly weatherData: Subject;

    constructor(weatherData: Subject){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    display(): void
    {
        console.log("Forecast: ");
        if (this.currentPressure > this.lastPressure)
        {
            console.log("Improving weather on the way!");
        }
        else if (this.currentPressure == this.lastPressure)
        {
            console.log("More of the same");
        }
        else if (this.currentPressure < this.lastPressure)
        {
            console.log("Watch out for cooler, rainy weather");
        }
    }

    unregisterForcast():void 
    {
        this.weatherData.removeObserver(this);
    }

    update(temp:number, humidity:number, pressure:number): void
    {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;

        this.display();
    }
}

export default ForecastDisplay;
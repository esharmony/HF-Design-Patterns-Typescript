import Subject from "../Subjects/Abstractions/Subject";
import DisplayElement from "./Abstractions/DisplayElement";
import Observer from "./Abstractions/Observer";

class StatisticsDisplay implements Observer, DisplayElement
{
    private maxTemp: number = 0;
    private minTemp = 200;
    private tempSum: number = 0;
    private numReadings: number = 0;
    private readonly weatherData: Subject;

    constructor(weatherData: Subject){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    display():void
    {
        console.log("Avg/Max/Min temperature = " + (this.tempSum / this.numReadings)
        + "/" + this.maxTemp + "/" + this.minTemp);
    }

    update(temp:number, humidity:number, pressure:number):void
    {
        this.tempSum += temp;
        this.numReadings++;

        if (temp > this.maxTemp)
        {
            this.maxTemp = temp;
        }

        if (temp < this.minTemp)
        {
            this.minTemp = temp;
        }

        this.display();
    }
}

export default StatisticsDisplay;
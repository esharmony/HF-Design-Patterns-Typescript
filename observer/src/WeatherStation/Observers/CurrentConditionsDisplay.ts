import Subject from "../Subjects/Abstractions/Subject";
import DisplayElement from "./Abstractions/DisplayElement";
import Observer from "./Abstractions/Observer";

class CurrentConditionsDisplay implements Observer, DisplayElement
{
    private temperature: number = 0;
    private humidity: number = 0;
    private weatherData: Subject;

    constructor(weatherData: Subject){
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    display(): void
    {
        console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
    }

    update(temp: number, humidity:number):void
    {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
}

export default CurrentConditionsDisplay;
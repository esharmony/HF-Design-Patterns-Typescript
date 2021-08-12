export default abstract class Beverage
{
    public Description: string = "Unknown Beverage";

    public abstract Cost(): number;
}
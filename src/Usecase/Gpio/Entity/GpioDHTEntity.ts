
import Dht from "pigpio-dht";



export class GpioDHTEntity
{
    private instance;


    constructor(gpioId: number, type: number = 11) {
        this.instance = Dht(gpioId, type);
    }

    public read()
    {
        this.instance.read();
        return this.instance;
    }

    public i()
    {
        return this.instance;
    }

}
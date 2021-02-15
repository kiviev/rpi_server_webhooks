import {Gpio, Direction, Edge, Options} from 'onoff';



export class PinEntity extends Gpio 
{
    constructor(gpio: number, direction: Direction, edge?: Edge, options?: Options){
        super(gpio, direction, edge, options)
    }

    public onSync()
    {
        this.writeSync(Gpio.HIGH)
    }

    public offSync()
    {
        this.writeSync(Gpio.LOW)
    }

    public static gpioIsAccesible()
    {
        return Gpio.accessible;
    }
}
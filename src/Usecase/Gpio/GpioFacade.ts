import { PinEntity } from "./Entity/PinEntity";
export type High = 1;
export type Low = 0;
export type BinaryValue = High | Low;
export type Direction = "in" | "out" | "high" | "low";



export default class GpioFacade
{
    static HIGH: High;

    static LOW: Low;

    static DIRECTION = {
            in: 'in',
            out: 'out',
            hight: 'high',
            low: 'low'
        };

    pin: PinEntity;

    constructor(gpio: number, direction: Direction){
        
        if(!GpioFacade.gpioIsAccesible()){ 
            console.error('Gpio not found in this device');
            throw new Error('Gpio not found in this device')
        }else{
            this.pin = new PinEntity(gpio, direction);
        }
    }

    public onSync()
    {
        this.pin.onSync();
    }

    public offSync()
    {
        this.pin.offSync();
    }

    public readSync(): BinaryValue
    {
        return this.pin.readSync();
    }

    public static gpioIsAccesible()
    {
        return PinEntity.accessible;
    }

}
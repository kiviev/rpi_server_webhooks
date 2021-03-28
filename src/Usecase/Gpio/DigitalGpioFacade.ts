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

    static pines: PinEntity[] = [];

    constructor(gpio: number, direction: Direction){
        if(!GpioFacade.gpioIsAccesible()){ 
            console.error('Gpio not found in this device');
            throw new Error('Gpio not found in this device')
        }else{
            if (!GpioFacade.pines[gpio]){
                GpioFacade.pines[gpio] = new PinEntity(gpio, direction);
            }
        }
    }

    private static getPin(gPio: number)
    {
        return GpioFacade.pines[gPio];
    }

    public onSync(gPio: number)
    {
        GpioFacade.getPin(gPio).onSync();
    }

    public offSync(gPio: number)
    {
        GpioFacade.getPin(gPio).offSync();
    }

    public readSync(gPio: number): BinaryValue
    {
        return GpioFacade.getPin(gPio).readSync();
    }

    public static gpioIsAccesible()
    {
        return PinEntity.accessible;
    }

    public direction(gPio: number)
    {
        return GpioFacade.getPin(gPio).direction();
    }

}
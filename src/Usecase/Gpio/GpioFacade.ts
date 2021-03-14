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


    pins: PinEntity[] = [];

    static instance: GpioFacade;

    constructor(){
        if(!GpioFacade.gpioIsAccesible()){ 
            console.error('Gpio not found in this device');
            throw new Error('Gpio not found in this device')
        }
    }

    public static i()
    {
        if (!GpioFacade.instance){
            GpioFacade.instance = new GpioFacade();
        }

        return GpioFacade.instance;
    }

    public setPin(gpio:number, direction: Direction)
    {
        let pin = this.pins[gpio];
        if(pin){
            if(pin.direction() != direction){
                this.pins[gpio] = new PinEntity(gpio, direction);
            }
        }else {
            this.pins[gpio] = new PinEntity(gpio, direction);
        }
    }

    public onSync(gpio: number)
    {
        let pin = this.pins[gpio];
        
        console.log(pin)
        if(pin){
            pin.onSync();
        }
    }

    public offSync(gpio:number)
    {
        let pin = this.pins[gpio];

        if (pin) {
            pin.offSync();
        }
    }

    public readSync(gpio:number)
    {
        let result = null;
        let pin = this.pins[gpio];

        if (pin) {
            result = pin.readSync();
        }

        return result;
    }

    public static gpioIsAccesible()
    {
        return PinEntity.accessible;
    }

    public direction(gpio:number)
    {
        let result = null;
        let pin = this.pins[gpio];

        if (pin) {
            result = this.pins[gpio].direction();
        }

        return result;
    }

    public getPin(gpio:number)
    {
        return this.pins[gpio];
    }

}
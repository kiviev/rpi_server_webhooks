import {GPioEntity} from "./Entity/GPioEntity";


export default class GpioManager
{

    static DIRECTION = GPioEntity.Direction;

    static pines: GPioEntity[] = [];

    constructor(gpio: number, direction: number){

        if (!GpioManager.pines[gpio]){
            GpioManager.pines[gpio] = new GPioEntity(gpio, direction);
        }
    }

    private static getPin(gPio: number)
    {
        return GpioManager.pines[gPio];
    }

    public onSync(gPio: number)
    {
        return GpioManager.getPin(gPio).onSync();
    }

    public offSync(gPio: number)
    {
        return GpioManager.getPin(gPio).offSync();
    }

    public readSync(gPio: number): number
    {
        return GpioManager.getPin(gPio).readSync();
    }

    public digitalWriteSync(gPio: number, on: boolean)
    {
        return GpioManager.getPin(gPio).writeSync(on ? 1 : 0);
    }

    public servoWrite(gPio:number, pulseWith: number)
    {
        return GpioManager.getPin(gPio).servoWrite(pulseWith);
    }

    /**
     *
     * @param gPio
     * @param dutyCycle int range [0-255]
     */
    public pwmWrite(gPio:number, dutyCycle: number)
    {
        return GpioManager.getPin(gPio).pwmWrite(dutyCycle);
    }
}
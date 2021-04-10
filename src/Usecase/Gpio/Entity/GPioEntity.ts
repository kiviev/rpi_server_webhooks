
import {Gpio} from "pigpio";



export class GPioEntity
{
    private instance;

    static Direction = {
        in: Gpio.INPUT,
        out: Gpio.OUTPUT,
        alt0: Gpio.ALT0,
        alt1: Gpio.ALT1,
        alt2: Gpio.ALT2,
        alt3: Gpio.ALT3,
        alt4: Gpio.ALT4,
        alt5: Gpio.ALT5,
        pud_off: Gpio.PUD_OFF,
        pud_down: Gpio.PUD_DOWN,
        pud_up: Gpio.PUD_UP,
        rissing_edge: Gpio.RISING_EDGE,
        falling_edge: Gpio.FALLING_EDGE,
        timeout: Gpio.TIMEOUT,
        min_gpio: Gpio.MIN_GPIO,
        max_gpio: Gpio.MAX_GPIO,
        max_user_gpio: Gpio.MAX_USER_GPIO,
    }

    constructor(gpioId: number, mode: number){
        this.instance = new Gpio(gpioId,{
            mode: mode,
        })
    }

    public onSync(): number
    {
        const result: Gpio =  this.instance.digitalWrite(1);
        return result.digitalRead();
    }


    public offSync(): number
    {
        const result: Gpio = this.instance.digitalWrite(0);
        return result.digitalRead();
    }


    public readSync(): number
    {
        return this.instance.digitalRead();
    }

    public writeSync(level: number): number
    {
        const result: Gpio = this.instance.digitalWrite(level);
        return result.digitalRead();
    }

    public servoWrite(pulseWidth: number): number
    {
        const result = this.instance.servoWrite(pulseWidth);
        return result.getServoPulseWidth();
    }

    public pwmWrite(dutyCycle: number): number
    {
        const result = this.instance.pwmWrite(dutyCycle);
        return result.getPwmRealRange();
    }

}
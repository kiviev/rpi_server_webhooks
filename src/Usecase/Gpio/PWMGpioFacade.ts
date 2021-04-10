import GpioManager from "./GpioManager";
import {BaseGpioFacade} from "./BaseGpioFacade";


export class PWMGpioFacade extends BaseGpioFacade{


    /**
     *
     * @param gpioId
     * @param dutyCycle int range [0-255]
     */
    public static pwm(gpioId: number, dutyCycle: number): number
    {
        PWMGpioFacade.validatePwMInput(gpioId, dutyCycle);

        const manager = new GpioManager(gpioId, GpioManager.DIRECTION.out);
        return manager.pwmWrite(gpioId, dutyCycle);
    }

    /**
     *
     * @param gPioId
     * @param dutyCycle
     */
    public static validatePwMInput(gPioId: number, dutyCycle: number)
    {
        this.validateGpioId(gPioId, 'pwm');
        this.validateDutyCycle(dutyCycle);
    }
}
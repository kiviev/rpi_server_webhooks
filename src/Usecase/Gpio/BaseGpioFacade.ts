

export class BaseGpioFacade {

    static GPIO_IDS_ALLOWED = {
        digital: [1,17],
        sensor: [18],
        pwm: [17],
        servo: []
    };

    protected static validateGpioId(gPioId: number, type: string)
    {
        // @ts-ignore
        if(!BaseGpioFacade.GPIO_IDS_ALLOWED[type].includes(gPioId)){
            const msg = 'Pin Id:' + gPioId + ' is not allowed';

            console.error(msg);
            throw new Error(msg);

        }
    }

    protected static validateDutyCycle(dutyCycle: number)
    {
        if(!Number.isInteger(dutyCycle)  && dutyCycle > 255 || dutyCycle < 0){
            const msg = 'Duty cycle ' + dutyCycle + ' is not valid. Valid values in range [0-255]'

            console.error(msg);
            throw new Error(msg);

        }
    }
}
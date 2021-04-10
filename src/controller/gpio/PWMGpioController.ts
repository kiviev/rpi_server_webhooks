import {BaseGpioController} from "./BaseGpioController";
import {Request, Response} from "express";
import {PWMGpioFacade} from "../../Usecase/Gpio/PWM/PWMGpioFacade";


class PWMGpioController extends BaseGpioController {

    public setDuty(req: Request, res: Response) {
        const gpioId: number = PWMGpioController.getPinId(req);
        const dutyParam: string = req.params.dutyCycle;
        const dutyCycle: number = parseInt(dutyParam);

        const result = PWMGpioFacade.pwmDutyCycle(gpioId, dutyCycle);

        const response = {
            route: 'PWMSetDuty',
            pinId: gpioId,
            status: result
        };

        res.send(response);
    }

}

export default new PWMGpioController();
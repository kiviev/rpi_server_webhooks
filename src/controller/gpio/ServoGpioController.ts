import {BaseGpioController} from "./BaseGpioController";
import {Request, Response} from "express";
import {ServoGpioFacade} from "../../Usecase/Gpio/Servo/ServoGpioFacade";


class ServoGpioController extends BaseGpioController{

    public setPulse(req: Request, res: Response){
        const gpioId: number = ServoGpioController.getPinId(req);
        const pulseParam: string = req.params.pulse;
        const pulse: number = parseInt(pulseParam);

        const result = ServoGpioFacade.servoWrite(gpioId, pulse);

        const response = {
            route: 'ServoGpioSetPulse',
            pinId: gpioId,
            pulse: result
        }

        res.send(response);
    }

}

export default new ServoGpioController();
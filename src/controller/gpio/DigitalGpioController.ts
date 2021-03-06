import {Request, Response} from 'express';
import {DigitalGpioFacade} from "../../Usecase/Gpio/Digital/DigitalGpioFacade";
import {BaseGpioController} from "./BaseGpioController";


class DigitalGpioController extends BaseGpioController{


    public index (req: Request, res: Response) {
        const result = {
            route: 'Gpio',
            status: 'OK'
        };

        res.send(result);     
    }

    public pinStatus (req: Request, res: Response) {
        const pinId = DigitalGpioController.getPinId(req);

        const status = DigitalGpioFacade.getPinStatus(pinId);
        console.log(status)

        const result = {
            route: 'DigitalStatus',
            pinId,
            status: !!status
        };

        res.send(result);     
    }

    public setPinStatus (req: Request, res: Response) {

        const pinId: number = DigitalGpioController.getPinId(req);
        const on: boolean = req.params.status === 'on';

        const dStatus = DigitalGpioFacade.setPinStatus(pinId, on);
        const result = {
            route: 'DigitalSetStatus',
            pinId,
            on: !!dStatus
        };

        res.send(result);     
    }

}



export default new DigitalGpioController();
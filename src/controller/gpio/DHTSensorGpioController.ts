import {Request, Response} from 'express';
import {BaseGpioController} from "./BaseGpioController";
import {DHTGpioFacade, DHTResponse} from "../../Usecase/Gpio/DHD/DHTGpioFacade";


class DHTSensorGpioController extends BaseGpioController{


    public async loadPin (req: Request, res: Response)
    {
        const gPioId: number = DHTSensorGpioController.getPinId(req);
        const result: DHTResponse = await DHTGpioFacade.loadGpio(gPioId);


        let response = {
            route: 'DHTSensorLoad',
            pinId: gPioId,
            sensor: result
        }

        res.send({response});
    }


}



export default new DHTSensorGpioController();
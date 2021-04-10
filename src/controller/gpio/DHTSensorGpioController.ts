import {Request, Response} from 'express';
import {BaseGpioController} from "./BaseGpioController";
import {DHTGpioFacade} from "../../Usecase/Gpio/DHD/DHTGpioFacade";


class DHTSensorGpioController extends BaseGpioController{


    public async loadPin (req: Request, res: Response)
    {
        const gPioId: number = DHTSensorGpioController.getPinId(req);
        const r = await DHTGpioFacade.loadGpio(gPioId);


        let result = {
            route: 'DigitalSetStatus',
            pinId : gPioId,
            sensor: {
                // @ts-ignore
                temp: r.temp,
                // @ts-ignore
                humidity: r.humidity
            }

        };
        res.send({result});
    }


}



export default new DHTSensorGpioController();
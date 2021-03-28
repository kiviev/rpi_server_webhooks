import {Request, Response} from 'express';
import DigitalGpioFacade from '../../Usecase/Gpio/DigitalGpioFacade';


class DigitalGpioController{

    static PIN_IDS_ALLOWED = [1,17];

    public index (req: Request, res: Response) {
        const result = {
            route: 'Gpio',
            status: 'OK'
        };

        res.send(result);     
    }

    public pinStatus (req: Request, res: Response) {
        const pinId = DigitalGpioController.getPinId(req);
        DigitalGpioController.validate(pinId);

        const facade = new DigitalGpioFacade(pinId, 'out');
        const status = facade.readSync(pinId);
        console.log(status)

        const result = {
            route: 'PinStatus',
            pinId,
            status: status
        };

        res.send(result);     
    }

    public setPinStatus (req: Request, res: Response) {

        const pinId: number = DigitalGpioController.getPinId(req);
        DigitalGpioController.validate(pinId)
        const on: boolean = req.params.status === 'on';

        
        const facade = new DigitalGpioFacade(pinId, 'out');

        if(on){
            facade.onSync(pinId);
        }else{
            facade.offSync(pinId);
        }
      
        const result = {
            route: 'PinStatus',
            pinId,
            on
        };

        res.send(result);     
    }

    private static validate(pinId: number)
    {
        if(!DigitalGpioController.PIN_IDS_ALLOWED.includes(pinId)){
            const msg = 'Pin Id:' + pinId + ' is not allowed';

            console.error(msg);
            throw new Error(msg);
            
        }
    }

    private static getPinId(req: Request): number
    {
        const id = parseInt(req.params.id);
        return id ? id : 0;
    }
}



export default new DigitalGpioController();
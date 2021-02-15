import { Request, Response } from 'express';
import GpioFacade from '../../Usecase/Gpio/GpioFacade';



class GpioController{

    static PIN_IDS_ALLOWED = [1,17];

    public index (req: Request, res: Response) {
        const result = {
            route: 'Gpio',
            status: 'OK'
        };

        res.send(result);     
    }

    public pinStatus (req: Request, res: Response) {
        const pinId = GpioController.getPinId(req);
        GpioController.validate(pinId);
        
        const result = {
            route: 'Pin',
            pinId,
            status: 'OK'
        };

        res.send(result);     
    }

    public setPinStatus (req: Request, res: Response) {
        // const id = parseInt(req.params.id);
        const pinId: number = GpioController.getPinId(req);
        GpioController.validate(pinId)
        const on: boolean = req.params.status === 'on';

        GpioController.validate(pinId);
        
        const facade = new GpioFacade(pinId, 'in');

        if(on){
            facade.onSync();
        }else{
            facade.offSync();
        }
      
        const result = {
            route: 'PinStatus',
            pinId,
            on
        };

        console.log(result)

        res.send(result);     
    }

    private static validate(pinId: number)
    {
        if(!GpioController.PIN_IDS_ALLOWED.includes(pinId)){
            const msg = 'Pin Id:' + pinId + ' is not allowed';

            console.error(msg);
            throw new Error(msg);
            
        }
    }

    private static getPinId(req: Request): number
    {
        const id = parseInt(req.params.id);
        const pinId: number = id ? id : 0;

        return pinId;
    }
}



export default new GpioController();
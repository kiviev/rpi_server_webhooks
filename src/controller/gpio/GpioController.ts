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
        const gpio = GpioController.getPinId(req);
        GpioController.validate(gpio);

        const facade = GpioFacade.i();
        const status = facade.readSync(gpio);
                
        const result = {
            route: 'PinStatus',
            gpio,
            on: status == 1 ? true : false
        };

        res.send(result);     
    }

    public setPinStatus (req: Request, res: Response) {
     
        const gpio: number = GpioController.getPinId(req);
        GpioController.validate(gpio)
        const on: boolean = req.params.status === 'on';

        
        const facade = GpioFacade.i();
        facade.setPin(gpio, 'out')

        if(on){
            facade.onSync(gpio);
        }else{
            facade.offSync(gpio);
        }
      
        const result = {
            route: 'PinStatus',
            gpio,
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
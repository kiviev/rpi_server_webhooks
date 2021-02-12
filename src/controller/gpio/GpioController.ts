import { Request, Response } from 'express';

class GpioController{

    public index (req: Request, res: Response) {
        const result = {
            route: 'Gpio',
            status: 'OK'
        };

        res.send(result);     
    }

    public pinStatus (req: Request, res: Response) {
        const pinId = req.params.id;
        
        const result = {
            route: 'Pin',
            pinId,
            status: 'OK'
        };

        res.send(result);     
    }

    public setPinStatus (req: Request, res: Response) {
        const pinId = req.params.id;
        const on = req.params.status === 'on';
        
        const result = {
            route: 'PinStatus',
            pinId,
            on
        };

        console.log(result)

        res.send(result);     
    }
}



export default new GpioController();
import { Request, Response } from 'express';

class IndexController{

    public index (req: Request, res: Response) {
        const result = {
            status: 'OK'
        };
        res.send(result);     
    }
}

export default new IndexController();
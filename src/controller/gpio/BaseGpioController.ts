import {Request} from "express";


export class BaseGpioController{


    protected static getPinId(req: Request): number
    {
        const id = parseInt(req.params.id);
        return id ? id : 0;
    }
}
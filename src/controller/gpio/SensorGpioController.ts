import {Request, Response} from 'express';
import {promises} from 'node-dht-sensor';


class SensorGpioController{

    static PIN_IDS_ALLOWED = [27];


    public async loadPin (req: Request, res: Response) 
    {
        async function exec() {
            try {
                let res = await promises.read(11, 27);
                console.log(
                `temp: ${res.temperature.toFixed(1)}°C, ` +
                    `humidity: ${res.humidity.toFixed(1)}%`
                );

                return  {
                    temp: res.temperature/* .toFixed(2) */,
                    humidity: res.humidity/* .toFixed(1) */
                }
            } catch (err) {
                console.error("Failed to read sensor data:", err);
            }

        }

        let result = await exec();
        res.send({result });
    }

    private static validate(pinId: number)
    {
        if(!SensorGpioController.PIN_IDS_ALLOWED.includes(pinId)){
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



export default new SensorGpioController();
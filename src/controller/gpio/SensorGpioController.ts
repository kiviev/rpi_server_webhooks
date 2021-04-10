import {Request, Response} from 'express';
import {promises} from 'node-dht-sensor';
import {BaseGpioController} from "./BaseGpioController";


class SensorGpioController extends BaseGpioController{


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


}



export default new SensorGpioController();
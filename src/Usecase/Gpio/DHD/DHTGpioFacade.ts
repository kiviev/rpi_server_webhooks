import {BaseGpioFacade} from "../BaseGpioFacade";
import {GpioDHTEntity} from "../Entity/GpioDHTEntity";

export interface DHTResponse {
    temperature: number
    humidity: number
}


export class DHTGpioFacade extends BaseGpioFacade{


    public static async loadGpio(gpioId: number): Promise<DHTResponse>
    {
        this.validateGpioId(gpioId, 'dht');

        return new Promise( (resolve, reject) => {

            let entity = new GpioDHTEntity(gpioId);

            let sensor = entity.i();
            setInterval(() => {
                sensor.read();
            }, 2500); // the sensor can only be red every 2 seconds

            sensor.on('result', data => {
                let res : DHTResponse = {
                    temperature: data.temperature,
                    humidity: data.humidity
                }
                resolve(res)
            });

        })
    }

}
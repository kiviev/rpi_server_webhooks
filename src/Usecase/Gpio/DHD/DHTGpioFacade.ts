import {BaseGpioFacade} from "../BaseGpioFacade";
import {GpioDHTEntity} from "../Entity/GpioDHTEntity";

export interface DHTResponse {
    temperature: number
    humidity: number
}


export class DHTGpioFacade extends BaseGpioFacade{


    public static async loadGpio(gpioId: number)
    {
        this.validateGpioId(gpioId, 'dht');

        return new Promise( (resolve, reject) => {

            let entity = new GpioDHTEntity(gpioId);

            let sensor = entity.read();

            sensor.on('result', data => {
                resolve({
                    temp: data.temperature,
                    humidity: data.humidity
                })
            });

            sensor.on('badChecksum', () => {
                console.log('checksum failed');
                reject('checksum failed')
            });
        })
    }

}
import {BaseGpioFacade} from "../BaseGpioFacade";
import GpioManager from "../GpioManager";


export class ServoGpioFacade extends BaseGpioFacade{


    public static servoWrite(pinId: number, pulseWith: number)
    {
        this.validateGpioId(pinId, 'servo');
        const manager = new GpioManager(pinId, GpioManager.DIRECTION.out);

        return manager.servoWrite(pinId, pulseWith);
    }
}
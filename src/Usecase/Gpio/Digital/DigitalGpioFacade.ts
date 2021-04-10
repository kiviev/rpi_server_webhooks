import GpioManager from "../GpioManager";
import {BaseGpioFacade} from "../BaseGpioFacade";


export class DigitalGpioFacade extends BaseGpioFacade
{
    /**
     *
     * @param pinId
     */
    public static getPinStatus(pinId: number): number
    {
        this.validateGpioId(pinId, 'digital');
        const manager = new GpioManager(pinId, GpioManager.DIRECTION.out);
        return manager.readSync(pinId);
    }

    /**
     *
     * @param pinId
     * @param on
     */
    public static setPinStatus(pinId: number, on: boolean): number
    {
        this.validateGpioId(pinId, 'digital')
        const manager = new GpioManager(pinId, GpioManager.DIRECTION.out);
        if (on){
            manager.onSync(pinId);
        }else{
            manager.offSync(pinId);
        }
        return manager.readSync(pinId);
    }




}
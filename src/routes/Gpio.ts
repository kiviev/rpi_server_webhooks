import {Router} from 'express';
import DigitalGpioController from '../controller/gpio/DigitalGpioController';
import SensorGpioController from '../controller/gpio/SensorGpioController';

const router: Router = Router();

// Digital On-off
router.get('/', DigitalGpioController.index);
router.get('/digital/:id', DigitalGpioController.pinStatus);
router.get('/digital/:id/set-status/:status', DigitalGpioController.setPinStatus);


// Sensor
router.get('/sensor/:id/load/', SensorGpioController.loadPin);


export default router;
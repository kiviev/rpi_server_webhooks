import {Router} from 'express';
import DigitalGpioController from '../controller/gpio/DigitalGpioController';
import DPTSensorGpioController from '../controller/gpio/DHTSensorGpioController';
import PWMGpioController from "../controller/gpio/PWMGpioController";

const router: Router = Router();

// Digital On-off
router.get('/', DigitalGpioController.index);
router.get('/digital/:id', DigitalGpioController.pinStatus);
router.get('/digital/:id/set-status/:status', DigitalGpioController.setPinStatus);


// Sensor
router.get('/sensor/:id/load/', DPTSensorGpioController.loadPin);

// PWM
router.get('/pwm/:id/:dutyCycle', PWMGpioController.setDuty);


export default router;
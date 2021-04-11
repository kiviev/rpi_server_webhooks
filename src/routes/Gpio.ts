import {Router} from 'express';
import DigitalGpioController from '../controller/gpio/DigitalGpioController';
import DPTSensorGpioController from '../controller/gpio/DHTSensorGpioController';
import PWMGpioController from "../controller/gpio/PWMGpioController";
import ServoGpioController from "../controller/gpio/ServoGpioController";

const router: Router = Router();

// Digital
router.get('/', DigitalGpioController.index);
router.get('/digital/:id', DigitalGpioController.pinStatus);
router.get('/digital/:id/set-status/:status', DigitalGpioController.setPinStatus);


// Sensor
router.get('/sensor/:id/load/', DPTSensorGpioController.loadPin);


// PWM
router.get('/pwm/:id/duty/:dutyCycle', PWMGpioController.setDuty);


// Servo
router.get('/servo/:id/pulse/:pulse', ServoGpioController.setPulse);



export default router;
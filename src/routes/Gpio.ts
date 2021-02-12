import {Router} from 'express';
import GpioController from '../controller/gpio/GpioController';

const router: Router = Router();

router.get('/', GpioController.index);
router.get('/pin/:id', GpioController.pinStatus);
router.get('/pin/:id/set-status/:status', GpioController.setPinStatus);


export default router;
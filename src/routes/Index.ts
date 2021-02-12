import {Router} from 'express';
import IndexController from '../controller/index/IndexController';

const router: Router = Router();

router.get('/', IndexController.index);


export default router;
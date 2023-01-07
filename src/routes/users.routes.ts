import { Router } from 'express';
import * as controllers from '../handlers/userHandler';
const routes = Router();

routes.post('/', controllers.signUp);
routes.get('/', controllers.protect, controllers.index);
routes.get('/:id', controllers.protect, controllers.show);
routes.post('/login', controllers.logIn);

export default routes;

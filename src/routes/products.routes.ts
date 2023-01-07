import { Router } from 'express';
import * as controllers from '../handlers/productHandler';
import { protect } from '../handlers/userHandler';
const routes = Router();

routes.get('/', controllers.index);
routes.post('/', protect, controllers.create);
routes.get('/:id', controllers.show);
routes.patch('/:id', protect, controllers.update);
routes.delete('/:id', protect, controllers.deleteProduct);

export default routes;

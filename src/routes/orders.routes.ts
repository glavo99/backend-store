import { Router } from 'express';
import * as controllers from '../handlers/orderHandler';
import { protect } from '../handlers/userHandler';
const routes = Router();

routes.get('/', protect, controllers.index);
routes.post('/', protect, controllers.create);
routes.get('/:id', protect, controllers.show);
routes.get('/:id/products', protect, controllers.showCart);
routes.post('/:id/products', protect, controllers.addProduct);
routes.delete('/:id/products', protect, controllers.deleteProduct);

export default routes;

import express from 'express';
import cartsController from '../controller/cart.js';


const routerCarts = express.Router();

routerCarts.get('/', cartsController.getCarts);
routerCarts.get('/:id', cartsController.getCart);

routerCarts.post('/', cartsController.postCart);

routerCarts.put('/:id', cartsController.putCart);
routerCarts.delete('/:id', cartsController.deleteCart);

export default routerCarts;

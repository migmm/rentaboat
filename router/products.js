import express from 'express';
import boatsController from '../controller/products.js';


const routerBoats = express.Router();

routerBoats.get('/', boatsController.getBoats);
routerBoats.get('/:id', boatsController.getBoat);

routerBoats.post('/', boatsController.postBoat);

routerBoats.put('/:id', boatsController.putBoat);
routerBoats.delete('/:id', boatsController.deleteBoat);

export default routerBoats;

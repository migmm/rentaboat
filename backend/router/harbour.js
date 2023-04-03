import express from 'express';
import harboursController from '../controller/harbour.js';


const routerHarbours = express.Router();

routerHarbours.get('/', harboursController.getHarbours);
routerHarbours.get('/:id', harboursController.getHarbour);

routerHarbours.post('/', harboursController.postHarbour);

routerHarbours.put('/:id', harboursController.putHarbour);
routerHarbours.delete('/:id', harboursController.deleteHarbour);

export default routerHarbours;

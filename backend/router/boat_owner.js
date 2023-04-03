import express from 'express';
import boatOwnersController from '../controller/boat_owner.js';


const routerBoatOwners = express.Router();

routerBoatOwners.get('/', boatOwnersController.getBoatOwners);
routerBoatOwners.get('/:id', boatOwnersController.getBoatOwner);

routerBoatOwners.post('/', boatOwnersController.postBoatOwner);

routerBoatOwners.put('/:id', boatOwnersController.putBoatOwner);
routerBoatOwners.delete('/:id', boatOwnersController.deleteBoatOwner);

export default routerBoatOwners;

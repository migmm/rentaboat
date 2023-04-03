import express from 'express';
import rentalsController from '../controller/rental.js';


const routerRentals = express.Router();

routerRentals.get('/', rentalsController.getRentals);
routerRentals.get('/:id', rentalsController.getRental);

routerRentals.post('/', rentalsController.postRental);

routerRentals.put('/:id', rentalsController.putRental);
routerRentals.delete('/:id', rentalsController.deleteRental);

export default routerRentals;

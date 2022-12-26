import express from 'express';
import customersController from '../controller/customer.js';


const routerCustomers = express.Router();

routerCustomers.get('/', customersController.getCustomers);
routerCustomers.get('/:id', customersController.getCustomer);

routerCustomers.post('/', customersController.postCustomer);

routerCustomers.put('/:id', customersController.putCustomer);
routerCustomers.delete('/:id', customersController.deleteCustomer);

export default routerCustomers;

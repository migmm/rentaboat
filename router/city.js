import express from 'express';
import citiesController from '../controller/city.js';


const routerCities = express.Router();

routerCities.get('/', citiesController.getCities);
routerCities.get('/:id', citiesController.getCity);

routerCities.post('/', citiesController.postCity);

routerCities.put('/:id', citiesController.putCity);
routerCities.delete('/:id', citiesController.deleteCity);

export default routerCities;

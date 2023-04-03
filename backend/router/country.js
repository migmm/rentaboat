import express from 'express';
import countriesController from '../controller/country.js';


const routerCountries = express.Router();

routerCountries.get('/', countriesController.getCountries);
routerCountries.get('/:id', countriesController.getCountry);

routerCountries.post('/', countriesController.postCountry);

routerCountries.put('/:id', countriesController.putCountry);
routerCountries.delete('/:id', countriesController.deleteCountry);

export default routerCountries;

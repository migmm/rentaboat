import express from 'express';
import config from './config.js';
import { sequelize } from './model/sequelize.js';
import { Country } from "./models/country.js"; 
import { City } from "./models/city.js"; 
import { Avatar_boat_owner } from "./models/avatar_boat_owner.js"; 
import { Avatar_customer } from "./models/avatar_customer.js";
import { Boat_owner } from "./models/Boat_owner.js"; 
import { Cart } from "./models/cart.js"; 
import { Customer } from "./models/Customer.js"; 
import { Harbour } from "./models/harbour.js"; 
import { Image } from "./models/image.js"; 
import { Rental } from "./models/Rental.js"; 

// Import Routes
import routerAvatar from './router/avatar.js';
import routerBoat from './router/boat.js';
import routerBoatOwner from './router/boat_owner.js';
import routerCart from './router/cart.js';
import routerCity from './router/city.js';
import routerCountry from './router/country.js';
import routerCustomer from './router/customer.js';
import routerHabour from './router/harbour.js';
import routerImage from './router/image.js';
import routerRental from './router/rental.js';

const app = express();

app.use(express.static('public', { extensions: ['html', 'htm'] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/avatar', routerAvatar);
app.use('/api/boat', routerBoat);
app.use('/api/boatowner', routerBoatOwner);
app.use('/api/cart', routerCart);
app.use('/api/city', routerCity);
app.use('/api/country', routerCountry);
app.use('/api/customer', routerCustomer);
app.use('/api/harbour', routerHabour);
app.use('/api/image', routerImage);
app.use('/api/rental', routerRental);


import client from './model/postgresql.js'
client.connect();

const PORT = config.PORT;
const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}.`));
server.on('error', error => console.log('Error al iniciar el servidor Express: ' + error.message));
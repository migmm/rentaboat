import express from 'express';
import config from './config.js';
import { sequelize } from './model/sequelize.js';
import { Country } from "./models/country.js"; 
import { City } from "./models/city.js"; 
import { Harbour } from "./models/harbour.js"; 

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
// DB models imports to create Database
import './models/country.js';
import './models/city.js';
import './models/harbour.js';
import './models/image.js';
import './models/avatar.js';
import './models/cart.js';
import './models/rental.js';
import './models/boat_owner.js';
import './models/boat.js';
import './models/customer.js';

async function main() {
    try {
        await sequelize.sync({ force: true });
        app.listen(process.env.SQL_PORT);
        console.log("Base de datos conectada en puerto", process.env.SQL_PORT);
    } catch {
        console.log('Error al conectar con la base de datos')
    }
}

async function fillTables() {

    sequelize.sync({ force: true }).then(() => {
        console.log('Book table created successfully!');

        Country.bulkCreate([

            { countryName: "España" },
            { countryName: "Francia" },
            { countryName: "Croacia" },
            { countryName: "Italia" },

        ]).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        City.bulkCreate([

            { cityName: "Barcelona", countryId: "1" },
            { cityName: "Girona", countryId: "1" },
            { cityName: "Alicante", countryId: "1" },
            { cityName: "Granada", countryId: "1" },
            { cityName: "Málaga", countryId: "1" },

            { cityName: "Niza", countryId: "2" },
            { cityName: "Cannes", countryId: "2" },
            { cityName: "Mónaco", countryId: "2" },
            { cityName: "Saint-Tropez", countryId: "2" },
            { cityName: "Marsella", countryId: "2" },

            { cityName: "NDubrovnik", countryId: "3" },
            { cityName: "Split", countryId: "3" },
            { cityName: "Islas dálmatas", countryId: "3" },

            { cityName: "Amalfi", countryId: "4" },
            { cityName: "Capri", countryId: "4" },
            { cityName: "Sorrento", countryId: "4" },
            { cityName: "Positano", countryId: "4" },

        ]).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        Harbour.bulkCreate([

            { harbourName: "Harbour Coast", cityId: "1" },
            { harbourName: "Harbour Coast", cityId: "2" },
            { harbourName: "Harbour Coast", cityId: "3" },
            { harbourName: "Harbour Coast", cityId: "4" },
            { harbourName: "Harbour Coast", cityId: "5" },

            { harbourName: "Harbour Coast", cityId: "6" },
            { harbourName: "Harbour Coast", cityId: "7" },
            { harbourName: "Harbour Coast", cityId: "8" },
            { harbourName: "Harbour Coast", cityId: "9" },
            { harbourName: "Harbour Coast", cityId: "10" },

            { harbourName: "Harbour Coast", cityId: "1" },
            { harbourName: "Harbour Coast", cityId: "2" },
            { harbourName: "Harbour Coast", cityId: "3" },

            { harbourName: "Harbour Coast", cityId: "4" },
            { harbourName: "Harbour Coast", cityId: "5" },
            { harbourName: "Harbour Coast", cityId: "6" },
            { harbourName: "Harbour Coast", cityId: "6" },

        ]).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });



    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });




}



//main()

fillTables()

const PORT = config.PORT;
const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}.`));
server.on('error', error => console.log('Error al iniciar el servidor Express: ' + error.message));
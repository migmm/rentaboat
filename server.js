import express from 'express';
import config from './config.js';
import routerBoats from './router/products.js';
import { sequelize } from './model/sequelize.js';
const app = express();
import { Country } from "./models/country.js";
app.use(express.static('public', { extensions: ['html', 'htm'] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/boats', routerBoats);

// DB models imports to create Database
import './models/country.js';
import './models/city.js';
import './models/harbour.js';
import './models/image.js';
import './models/avatar.js';
import './models/boat_owner.js';
import './models/boat.js';
import './models/customer.js';
import './models/rental.js';
import './models/cart.js';




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

    sequelize.sync().then(() => {
        console.log('Book table created successfully!');

        Country.create({
            country_name: "Spain",
            country_name: "France",
        }).then(res => {
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

import { City } from '../models/city.js';
import { Country } from '../models/country.js';

//const modelCities = CityModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getCities = async () => {
    const cities = await City.findAll({
        include: [
            {
                model: Country,
                required: true
            }
        ]
    });
    //const cities = await client.query('SELECT * from cities ORDER BY id ASC');
    return cities;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getCity = async id => {
    const city =  await client.query('SELECT * FROM cities WHERE id = $1', [id]);
    return city.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createCity = async city => {
    console.log(city.name)
    const createdCity =  await client.query('INSERT INTO cities (name, location) VALUES ($1, $2)', [city.name, city.location]);
    return createdCity;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateCity = async (id, city) => {
        const updatedCity = await client.query('UPDATE cities SET name = $1, location = $2 WHERE id = $3', [
            city.name,
            city.location,
            id
        ]);

        return updatedCity;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteCity = async id => {
    const removedCity = client.query('DELETE FROM cities where id = $1', [
        id
    ]);

    return removedCity;
};


export default {
    getCities,
    getCity,
    createCity,
    updateCity,
    deleteCity
};
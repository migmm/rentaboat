
import { Country } from '../models/country.js';
//const modelCountries = CountryModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getCountries = async () => {
    const countries = await Country.findAll();
    //const countries = await client.query('SELECT * from countries ORDER BY id ASC');
    return countries;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getCountry = async id => {
    const country = await Country.findOne({
        where: {
            id,
        },
    });
    //const country =  await client.query('SELECT * FROM countries WHERE id = $1', [id]);
    return country;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createCountry = async country => {
    const { countryName } = country;

    const createdCountry = await Country.create(
        {
            countryName
        },
    );
    //const createdCountry =  await client.query('INSERT INTO countries (name, location) VALUES ($1, $2)', [country.name, country.location]);
    return createdCountry;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateCountry = async (id, country) => {

    const { countryName } = country;

    const updatedCountry = await Country.findOne({where: { id }});
    updatedCountry.countryName = countryName
    await updatedCountry.save()

    return updatedCountry;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteCountry = async id => {
    const removedCountry = await Country.destroy({
        where: {
            id,
        },
    });

    return removedCountry;
};


export default {
    getCountries,
    getCountry,
    createCountry,
    updateCountry,
    deleteCountry
};
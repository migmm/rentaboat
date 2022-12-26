import api from '../api/country.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getCountries = async (req, res) => {
    res.json(await api.getCountries());
};

const getCountry = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getCountry(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postCountry = async function (req, res, next) {

    const country = req.body;
    const newCountry = await api.createCountry(country);
    res.json(newCountry);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putCountry = async (req, res) => {
    const id = req.params.id;
    const country = req.body;
    const updatedCountry = await api.updateCountry(id, country) || {};
    res.json(updatedCountry);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteCountry = async (req, res) => {
    const id = req.params.id;

    const removedCountry = await api.deleteCountry(id) || {};
    res.json(removedCountry);
};

export default {
    getCountries,
    getCountry,
    postCountry,
    putCountry,
    deleteCountry,
};

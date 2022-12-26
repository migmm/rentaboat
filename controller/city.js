import api from '../api/city.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getCities = async (req, res) => {
    res.json(await api.getCities());
};

const getCity = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getCity(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postCity = async function (req, res, next) {

    const city = req.body;
    const newCity = await api.createCity(city);
    res.json(newCity);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putCity = async (req, res) => {
    const id = req.params.id;
    const city = req.body;

    const updatedCity = await api.updateCity(id, city) || {};
    res.json(updatedCity);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteCity = async (req, res) => {
    const id = req.params.id;

    const removedCity = await api.deleteCity(id) || {};
    res.json(removedCity);
};

export default {
    getCities,
    getCity,
    postCity,
    putCity,
    deleteCity,
};

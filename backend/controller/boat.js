import api from '../api/boat.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getBoats = async (req, res) => {
    res.json(await api.getBoats());
};

const getBoat = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getBoat(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postBoat = async function (req, res, next) {

    const boat = req.body;
    const newBoat = await api.createBoat(boat);
    res.json(newBoat);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putBoat = async (req, res) => {
    const id = req.params.id;
    const boat = req.body;

    const updatedBoat = await api.updateBoat(id, boat) || {};
    res.json(updatedBoat);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteBoat = async (req, res) => {
    const id = req.params.id;

    const removedBoat = await api.deleteBoat(id) || {};
    res.json(removedBoat);
};

export default {
    getBoats,
    getBoat,
    postBoat,
    putBoat,
    deleteBoat,
};

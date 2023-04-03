import api from '../api/boat_owner.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getBoatOwners = async (req, res) => {
    res.json(await api.getBoatOwners());
};

const getBoatOwner = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getBoatOwner(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postBoatOwner = async function (req, res, next) {

    const boatOwner = req.body;
    const newBoatOwner = await api.createBoatOwner(boatOwner);
    res.json(newBoatOwner);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putBoatOwner = async (req, res) => {
    const id = req.params.id;
    const boatOwner = req.body;

    const updatedBoatOwner = await api.updateBoatOwner(id, boatOwner) || {};
    res.json(updatedBoatOwner);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteBoatOwner = async (req, res) => {
    const id = req.params.id;

    const removedBoatOwner = await api.deleteBoatOwner(id) || {};
    res.json(removedBoatOwner);
};

export default {
    getBoatOwners,
    getBoatOwner,
    postBoatOwner,
    putBoatOwner,
    deleteBoatOwner,
};

import api from '../api/rental.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getRentals = async (req, res) => {
    res.json(await api.getRentals());
};

const getRental = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getRental(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postRental = async function (req, res, next) {

    const rental = req.body;
    const newRental = await api.createRental(rental);
    res.json(newRental);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putRental = async (req, res) => {
    const id = req.params.id;
    const rental = req.body;

    const updatedRental = await api.updateRental(id, rental) || {};
    res.json(updatedRental);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteRental = async (req, res) => {
    const id = req.params.id;

    const removedRental = await api.deleteRental(id) || {};
    res.json(removedRental);
};

export default {
    getRentals,
    getRental,
    postRental,
    putRental,
    deleteRental,
};

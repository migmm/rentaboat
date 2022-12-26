import api from '../api/harbour.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getHarbours = async (req, res) => {
    res.json(await api.getHarbours());
};

const getHarbour = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getHarbour(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postHarbour = async function (req, res, next) {

    const harbour = req.body;
    const newHarbour = await api.createHarbour(harbour);
    res.json(newHarbour);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putHarbour = async (req, res) => {
    const id = req.params.id;
    const harbour = req.body;

    const updatedHarbour = await api.updateHarbour(id, harbour) || {};
    res.json(updatedHarbour);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteHarbour = async (req, res) => {
    const id = req.params.id;

    const removedHarbour = await api.deleteHarbour(id) || {};
    res.json(removedHarbour);
};

export default {
    getHarbours,
    getHarbour,
    postHarbour,
    putHarbour,
    deleteHarbour,
};

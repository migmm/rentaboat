import api from '../api/avatar.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getAvatars = async (req, res) => {
    res.json(await api.getAvatars());
};

const getAvatar = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getAvatar(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postAvatar = async function (req, res, next) {

    const avatar = req.body;
    const newAvatar = await api.createAvatar(avatar);
    res.json(newAvatar);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putAvatar = async (req, res) => {
    const id = req.params.id;
    const avatar = req.body;

    const updatedAvatar = await api.updateAvatar(id, avatar) || {};
    res.json(updatedAvatar);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteAvatar = async (req, res) => {
    const id = req.params.id;

    const removedAvatar = await api.deleteAvatar(id) || {};
    res.json(removedAvatar);
};

export default {
    getAvatars,
    getAvatar,
    postAvatar,
    putAvatar,
    deleteAvatar,
};
